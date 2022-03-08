// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract AssetPool is Ownable, ERC1155 {
        
    enum asset { DEFAULT, APi, APii, APiii, APiv, APv }

    mapping (uint256 => uint256) private _totalSupply;

    constructor(string memory _uri) public ERC1155(_uri) {
        mint(msg.sender, asset.APi, 10**6, "");
        mint(msg.sender, asset.APii, 10**6, "");
        mint(msg.sender, asset.APiii, 10**6, "");
        mint(msg.sender, asset.APiv, 10**6, "");
        mint(msg.sender, asset.APv, 10**6, "");
    }

    function mint (address to, asset id, uint256 amount, bytes memory data) public onlyOwner {
        require(uint256(id) > 0 && uint256(id) < 6, "invalid asset pool id");
        _mint(to, uint256(id), amount, data);
        _totalSupply[uint256(id)] += amount;
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function totalSupply(asset id) public view returns (uint256 assetSupply) {
        assetSupply = _totalSupply[uint256(id)];
    }
}