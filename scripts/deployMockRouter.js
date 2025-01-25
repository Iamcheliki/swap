// deployMockRouter.js
const hre = require("hardhat");

async function main() {
  const MockRouter = await hre.ethers.getContractFactory("MockUniswapRouter");
  const mockRouter = await MockRouter.deploy(); // Fixed extra )
  await mockRouter.waitForDeployment(); // Fixed extra )
  console.log("Mock Router deployed to:", await mockRouter.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });