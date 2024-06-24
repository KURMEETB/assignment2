// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract CustomToken {

    // Public variables to store token details
    string public coinName = "Sumanbhardwaj";
    string public coinSymbol = "SB";
    uint public supplyTotal = 0;

    // Mapping to store balances
    mapping(address => uint) public walletBalances;

    // Function to mint new tokens
    function createTokens(address recipient, uint amount) public {
        supplyTotal += amount;
        walletBalances[recipient] += amount;
    }

    // Function to burn tokens
    function destroyTokens(address account, uint amount) public {
        require(walletBalances[account] >= amount, "Not enough tokens to burn");
        supplyTotal -= amount;
        walletBalances[account] -= amount;
    }
}
