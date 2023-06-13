import { ethers } from 'hardhat'

import { Contract, Signer } from 'ethers'

export const deployContract = async <ContractType extends Contract>(
  contractName: string,
  args: any[],
  signer?: Signer
): Promise<ContractType> => {
  return (await (await ethers.getContractFactory(contractName, signer)).deploy(...args)) as ContractType
}
