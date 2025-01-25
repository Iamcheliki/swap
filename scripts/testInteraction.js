// testinteraction.js
const hre = require("hardhat");

async function main() {
  const contractAddress = "0x493e048b0ff03cf839791064627bd5583C3Eb66E";
  const Swap = await hre.ethers.getContractFactory("Swap");
  const swap = await Swap.attach(contractAddress);

  // Get router address (from constructor)
  const routerAddress = await swap.router();
  console.log("Router Address:", routerAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });