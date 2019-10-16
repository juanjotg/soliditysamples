const Empty = artifacts.require("Empty");
const Counter = artifacts.require("Counter");

module.exports = function(deployer) {
  deployer.deploy(Empty);
  deployer.deploy(Counter);
};

