const { expect } = require("chai");
import { time } from "@nomicfoundation/hardhat-network-helpers";
const { ethers } = require("hardhat");
const hre = require("hardhat");

describe("Campaign contract", function () {
    async function getCampaign() {
        const [creator, funder1, funder2] = await ethers.getSigners();
        // create new campaign
        const Campaign = await hre.ethers.getContractFactory("Campaign");
        const amount = ethers.utils.parseUnits("0.01", "ether")
        const startDate = Math.floor(new Date().getTime() / 1000);
        const endDate = startDate + 100000;
        // deploy campaign with 0.01 ether, 10 seconds duration
        const campaign = await Campaign.connect(creator).deploy("Test", amount, startDate, endDate);
        await campaign.deployed();

        return { creator, funder1, funder2, campaign, startDate, endDate };
    }

    it("Fund and claim the funds", async function () {
        const { campaign, creator, funder1, startDate, endDate } = await getCampaign();
        // fund campaign
        const fundingAmount = ethers.utils.parseUnits("0.01", "ether")
        await time.increaseTo(startDate + 1000);
        await campaign.connect(funder1).donate({ value: fundingAmount });
        // check campaign balance
        expect(await campaign.getAmountCollected()).to.equal(fundingAmount);
        // check if goal is reached
        expect(await campaign.isGoalReached()).to.equal(true);
        // await end date
        await time.increaseTo(endDate + 1000);
        // claim funds
        await campaign.connect(creator).claimFunds();
    });

    it("Fund, not reach the goal and thus not claim the funds", async function () {
        const { campaign, creator, funder1, endDate, startDate } = await getCampaign();
        // fund campaign
        const fundingAmount = ethers.utils.parseUnits("0.001", "ether")
        await time.increaseTo(startDate + 1000);
        await campaign.connect(funder1).donate({ value: fundingAmount });
        // check campaign balance
        expect(await campaign.getAmountCollected()).to.equal(fundingAmount);
        // check if goal is reached
        expect(await campaign.isGoalReached()).to.equal(false);
        // await end date
        await time.increaseTo(endDate + 1000);
        // claim funds
        await expect(campaign.connect(creator).claimFunds()).to.be.revertedWith('The goal amount has not been reached.');
    });

    it("Fund, reach the goal, claim the funds before the end date, claim the funds after the end date", async function () {
        const { campaign, creator, funder1, startDate, endDate } = await getCampaign();
        // fund campaign
        const fundingAmount = ethers.utils.parseUnits("0.01", "ether")
        await time.increaseTo(startDate + 1000);
        await campaign.connect(funder1).donate({ value: fundingAmount });
        await expect(campaign.connect(creator).donate({ value: fundingAmount })).to.be.revertedWith('Owner cannot donate.');
        // check campaign balance
        expect(await campaign.getAmountCollected()).to.equal(fundingAmount);
        // check if goal is reached
        expect(await campaign.isGoalReached()).to.equal(true);
        // claim funds before end date
        await time.increaseTo(endDate - 1000);
        await expect(campaign.connect(creator).claimFunds()).to.be.revertedWith('The funding phase is still in progress.');
        // await end date
        await time.increaseTo(endDate + 1000);
        // claim funds
        await campaign.connect(creator).claimFunds();
    });
});