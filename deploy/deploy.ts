import '@nomiclabs/hardhat-ethers'
import hre, { ethers } from 'hardhat'
import { deployContract } from './helpers/contract'

async function main(): Promise<void> {
  const [deployer] = await ethers.getSigners()

  console.log('\nDeploying Multicall...')
  const multicall = await deployContract('Multicall', [], deployer)
  console.log('Tx:', multicall.deployTransaction.hash)
  await multicall.deployed()

  console.log('Multicall Contract: ', multicall.address)
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error)
    process.exit(1)
  })
