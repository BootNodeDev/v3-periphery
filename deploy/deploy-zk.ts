import { Wallet, utils } from 'zksync-web3'
import hre, { ethers } from 'hardhat'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { Deployer } from '@matterlabs/hardhat-zksync-deploy'

async function main(): Promise<void> {
  console.log(`Running deploy script for the NFTDescriptor library`)

  const { PK } = process.env

  if (!PK) {
    console.error('No PK env var defined')
    return
  }
  // Initialize the wallet.
  const wallet = new Wallet(PK)

  // Create deployer object and load the artifact of the contract you want to deploy.
  const deployer = new Deployer(hre, wallet)
  const artifact = await deployer.loadArtifact('NFTDescriptor')

  const nftDescriptor = await deployer.deploy(artifact, [])

  //obtain the Constructor Arguments
  console.log('constructor args: ' + nftDescriptor.interface.encodeDeploy([]))

  // Show the contract info.
  const contractAddress = nftDescriptor.address
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`)
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error)
    process.exit(1)
  })
