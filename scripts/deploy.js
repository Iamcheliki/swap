const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const Swap = await hre.ethers.getContractFactory("Swap");

  // Deploy the contract
  const swap = await Swap.deploy();
  
  // Wait for deployment confirmation (new syntax)
  await swap.waitForDeployment();

  // Get the contract address (new syntax)
  const contractAddress = await swap.getAddress();
  console.log("Swap deployed to:", contractAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });