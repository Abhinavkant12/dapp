const Election = artifacts.require("Election");
const MyFirstContract = artifacts.require("MyFirstContract");
const Bank = artifacts.require("Bank");

module.exports = function(deployer) {
  deployer.deploy(Election);
  deployer.deploy(MyFirstContract);
  deployer.deploy(Bank);
};