module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, get } = deployments;
  const { deployer } = await getNamedAccounts();

  const sBrickArtifact = await get('sOlympus');
  const stakingArtifact = await get('OlympusStaking');

  await deploy('StakingWarmup', {
    from: deployer,
    args: [
      stakingArtifact.address,
      sBrickArtifact.address,
    ],
    log: true,
    nonce: "pending"
  });
};
module.exports.tags = ['StakingWarmup', 'AllEnvironments'];