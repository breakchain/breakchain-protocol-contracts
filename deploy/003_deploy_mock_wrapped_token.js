const { config } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const chainId = await getChainId();
  console.log(chainId);
  if (chainId === '31337' || chainId === '80001' || chainId === '4') {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const { name, symbol } = config.protocolParameters[chainId].wrappedToken;
    console.log("about to deploy");
    await deploy('WrappedToken', {
      from: deployer,
      args: [name, symbol],
      log: true,
      nonce: "pending"
    });
  }
};
module.exports.tags = ['WrappedToken', 'TestingOnly'];