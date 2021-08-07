const CreditCardList = artifacts.require("CreditCardList");

module.exports = function (deployer) {
  deployer.deploy(CreditCardList);
};
