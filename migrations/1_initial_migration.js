const Migrations = artifacts.require("AssetPool");

module.exports = function (deployer) {
  deployer.deploy(Migrations, "");
};
