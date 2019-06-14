const Election = artifacts.require("Election");
const Counter = artifacts.require("Counter");
const MetaCoin = artifacts.require("MetaCoin");
const ConvertLib = artifacts.require("ConvertLib");


module.exports = function(deployer) {
  deployer.deploy(Election);
  deployer.deploy(Counter);
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
};
