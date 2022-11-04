import React from 'react'
import { useAccount, useFeeData } from "wagmi"
import campaignContractInfo from '../../../artifacts/contracts/Campaign.sol/Campaign.json'
import campaignContract from '../../../contracts/abi/campaign.json'
import { ethers } from 'ethers'

function TestPage() {

    const { address } = useAccount()
    const { data } = useFeeData()

    const startDate = Math.floor(new Date().getTime() / 1000);
    const endDate = startDate + 100000;
    const amount = ethers.utils.parseUnits("0.01", "ether")

    const deployContract = async () => {
        // @ts-ignore
        const txHash = await ethereum.request({
            method: "eth_sendTransaction",
            params: [{
                from: address,
                data: campaignContractInfo.bytecode,
                arguments: ['Campaign', amount, startDate, endDate],
                gasPrice: data?.gasPrice?.toHexString(),
            }]
        })
        console.log(txHash)
    }

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <button className='btn btn-primary' onClick={deployContract}>Deploy Contract</button>
        </div>
    )
}

export default TestPage