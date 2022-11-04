// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract Campaign is Ownable {
    string private campaignName;
    uint256 private goalAmount;
    uint256 private amountCollected = 0;
    uint256 private startDate;
    uint256 private endDate;

    struct Donation {
        address donor;
        uint256 timestamp;
        uint256 amount;
    }

    mapping(uint256 => Donation) private donations;
    uint256 private donationsCounter = 0;

    event DonationOccurred(
        address indexed _from,
        uint256 indexed _id,
        uint _value
    );

    event FundsClaimed(address indexed _from, uint _value);

    event Received(address, uint);

    constructor(
        string memory _campaignName, // change to byte32
        uint256 _goalAmount,
        uint _startDate,
        uint _endDate
    ) {
        campaignName = _campaignName;
        goalAmount = _goalAmount;
        startDate = _startDate;
        endDate = _endDate;
    }

    receive() external payable {
        emit Received(msg.sender, msg.value);
    }

    function claimFunds() public onlyOwner {
        require(
            block.timestamp < endDate,
            "The funding phase is still in progress."
        );
        require(isGoalReached(), "The goal amount has not been reached.");
        payable(owner()).transfer(amountCollected);
        emit FundsClaimed(msg.sender, amountCollected);
        amountCollected = 0;
    }

    function donate() public payable {
        console.log("Donation received from: ", msg.sender);
        // uint256 allowance = allowance(msg.sender, address(this));
        // require(allowance >= _amount, "Allowance is not enough.");
        require(
            block.timestamp < endDate,
            "The funding phase of this project is ended."
        );

        donations[donationsCounter] = Donation(
            msg.sender,
            block.timestamp,
            msg.value
        );

        amountCollected += msg.value;
        emit DonationOccurred(msg.sender, donationsCounter, msg.value);
        donationsCounter++;
    }

    function isGoalReached() public view returns (bool) {
        return amountCollected >= goalAmount;
    }

    function getGoalAmount() public view returns (uint256) {
        return goalAmount;
    }

    function getAmountCollected() public view returns (uint256) {
        return amountCollected;
    }

    function getDonationsDetails(uint256 _id)
        public
        view
        returns (Donation memory)
    {
        return donations[_id];
    }

    function getDonationsCounter() public view returns (uint256) {
        return donationsCounter;
    }
}
