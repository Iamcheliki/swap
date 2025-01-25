const hre = require("hardhat");

async function main() {
  // Deploy TokenA
  const TokenA = await hre.ethers.getContractFactory("MockERC20");
  const tokenA = await TokenA.deploy("TokenA", "TKA");
  await tokenA.waitForDeployment();

  // Deploy TokenB
  const TokenB = await hre.ethers.getContractFactory("MockERC20");
  const tokenB = await TokenB.deploy("TokenB", "TKB");
  await tokenB.waitForDeployment();

  console.log("TokenA deployed to:", await tokenA.getAddress());
  console.log("TokenB deployed to:", await tokenB.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });