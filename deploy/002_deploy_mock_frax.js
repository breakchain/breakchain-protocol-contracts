const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const chainId = await getChainId();
  if (chainId === '31337' || chainId === '80001' || chainId === '4') {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const deployment = await deploy('USDC', {
      from: deployer,
      args: [Number(chainId)],
      log: true,
      nonce: "pending"
    });

    const fraxFactory = await ethers.getContractFactory('USDC');
    const frax = fraxFactory.attach(deployment.address);
    const initialMint = ethers.utils.parseEther('10000000');
    const deployerBalance = await frax.balanceOf(deployer);
    if (deployerBalance.eq(0)) {
      await frax.mint(deployer, initialMint);
    }
  }
};
module.exports.tags = ['USDC', 'TestingOnly'];