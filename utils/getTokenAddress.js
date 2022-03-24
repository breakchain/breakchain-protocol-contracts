const getTokenAddress = async ({ chainId, tokenName, get }) => {
  let address;

  switch (chainId) {
    case '250':
      address = config.contractAddresses[chainId][tokenName];
      break;
    default:
      let artifact;
      if (tokenName === 'usdc') {
        artifact = await get('USDC');
      } else if (tokenName === 'wrappedToken') {
        artifact = await get('WrappedToken');
      }
      address = artifact.address;
      break;
  }

  return address;
}

module.exports = getTokenAddress;