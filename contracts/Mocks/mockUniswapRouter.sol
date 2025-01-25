// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MockUniswapRouter {
    function swapExactTokensForTokens(
        uint256 amountIn,
        uint256 /*minAmountOut*/,
        address[] calldata path,
        address to,
        uint256 /*deadline*/
    ) external {
        IERC20(path[0]).transferFrom(msg.sender, address(this), amountIn);
        IERC20(path[1]).transfer(to, amountIn); // Simplified mock behavior
    }
}