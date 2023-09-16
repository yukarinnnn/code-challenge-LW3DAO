const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("bay");
  const contract = await Contract.deploy();

  await contract.deployed();

  console.log(`Deployed to address: ${contract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});