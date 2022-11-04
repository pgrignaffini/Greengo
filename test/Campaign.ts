const { expect } = require("chai");

describe("Campaign contract", function () {
    async function getCampaign() {
        const [creator, funder1, funder2] = await ethers.getSigners();

        // create new campaign
        const Campaign = await hre.ethers.getContractFactory("Campaign");
        const amount = ethers.utils.parseUnits("0.01", "ether")
        const dateInSecs = Math.floor(new Date().getTime() / 1000);
        // deploy campaign with 0.01 ether, 10 seconds duration
        const campaign = await Campaign.connect(creator).deploy("Test", amount, dateInSecs, dateInSecs + 10000);
        await campaign.deployed();

        return { creator, funder1, funder2, campaign }
    }

    it("Should create a campaign, fund it and claim the funds", async function () {
        const { campaign, creator, funder1 } = await getCampaign();
        const creatorBalance = await ethers.provider.getBalance(creator.address);
        // fund campaign
        const fundingAmount = ethers.utils.parseUnits("0.01", "ether")
        await campaign.connect(funder1).donate({ value: fundingAmount });
        // check campaign balance
        expect(await campaign.getAmountCollected()).to.equal(fundingAmount);
        // check if goal is reached
        expect(await campaign.isGoalReached()).to.equal(true);
        // await 10 seconds
        await new Promise(r => setTimeout(r, 10000));
        // claim funds
        await campaign.connect(creator).claimFunds();
    });

    it("Should create a campaign, fund it, not reach the goal and thus not claim the funds", async function () {
        const { campaign, creator, funder1 } = await getCampaign();
        // fund campaign
        const fundingAmount = ethers.utils.parseUnits("0.001", "ether")
        await campaign.connect(funder1).donate({ value: fundingAmount });
        // check campaign balance
        expect(await campaign.getAmountCollected()).to.equal(fundingAmount);
        // check if goal is reached
        expect(await campaign.isGoalReached()).to.equal(false);
        // await 10 seconds
        await new Promise(r => setTimeout(r, 10000));
        // claim funds
        await expect(campaign.connect(creator).claimFunds()).to.be.revertedWith('The goal amount has not been reached.');
    });
});