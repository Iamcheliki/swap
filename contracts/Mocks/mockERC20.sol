// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockERC20 is ERC20 {
    // Constructor: Mint 1 million tokens to deployer
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    // Optional: Add a mint function for testing
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}