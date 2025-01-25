// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

interface IMockRouter {
    function swapExactTokensForTokens(
        uint256 amountIn,
        uint256 minAmountOut,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external;
}

contract Swap {
    address public immutable router;

    constructor(address _router) {
        router = _router;
    }

    function swapTokensForTokens(
        address tokenIn,
        address tokenOut,
        uint256 amountIn,
        uint256 minAmountOut
    ) external {
        address[] memory path = new address[](2);
        path[0] = tokenIn;  // Fixed [@] → [0]
        path[1] = tokenOut; // Fixed variable name

        IMockRouter(router).swapExactTokensForTokens(
            amountIn,
            minAmountOut,
            path,
            msg.sender,
            block.timestamp
        );
    }
}