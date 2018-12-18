// const web3 = require("web3");
const ResaleTokenBucket = artifacts.require("ResaleTokenBucket.sol");

module.exports = async function(deployer, network, [owner, minter]) {
  await deployer.then(async () => {
    const ResaleTokenBucketSize = 100 * (10**6) * (10**18);
    const ResaleTokenBucketRate = 100 * (10**6) * (10**18);
    await deployer.deploy(ResaleTokenBucket, "0xb6b4f1f49f6f52d071487031f2c55a267d760630", ResaleTokenBucketSize, ResaleTokenBucketRate);
    const ResaleTokenBucketDeployed = await ResaleTokenBucket.deployed();
  });
};
