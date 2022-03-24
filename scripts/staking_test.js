const { ethers, getNamedAccounts, deployments: { get } } = require("hardhat");

async function main() {
    const accounts = await getNamedAccounts();
    const { deployer } = accounts;

    const brickAddress = (await get('OlympusERC20Token')).address;
    const brick = (await ethers.getContractFactory('OlympusERC20Token')).attach(brickAddress);
    const stakingHelperAddress = (await get('StakingHelper')).address;
    const stakingHelper = (await ethers.getContractFactory('StakingHelper')).attach(stakingHelperAddress);

    const stakeAmount = await brick.balanceOf(deployer);
    console.log(`deployer has ${ethers.utils.formatUnits(stakeAmount, 9)}`);

    await brick.approve(stakingHelper.address, stakeAmount);
    await stakingHelper.stake(stakeAmount, { gasLimit: 500000 });

    //await brick.approve(stakingHelper.address, 111111000000000);
    //await stakingHelper.stake(100, { gasLimit: 500000 });

    const sfBrickAddress = (await get('sOlympus')).address;
    const sfBrick = (await ethers.getContractFactory('sOlympus')).attach(sfBrickAddress);

    const balance = await sfBrick.balanceOf(deployer);
    console.log(`${deployer} has ${ethers.utils.formatUnits(balance, 9)} staked Brick`);
}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
    })
