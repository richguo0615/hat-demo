import { expect } from "chai";
import { ethers } from "hardhat";

describe("Token", function() {
  it("Test token", async function() {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Token");
    const hardhatToken = await Token.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});