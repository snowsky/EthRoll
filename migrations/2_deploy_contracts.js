var eth = artifacts.require("./eth.sol");

module.exports = function(deployer) {
  deployer.deploy(eth);
};
