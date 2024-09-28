# Metacrafters_ETH-AVAX-PROOF_Project1
It is a simple smart contract in Solidity that demonstrates the use of require(), assert(), and revert() statements. This contract allows users to deposit and withdraw Ether, ensuring that certain conditions are met using these control flow statements.

## Explanation
- Require Statement (require()):
Used in the deposit() function to ensure the deposit amount is greater than zero.
Used in the withdraw() function to ensure the withdrawal amount is greater than zero and the sender has sufficient balance.

- Assert Statement (assert()):
Used in the withdraw() function to ensure the contract has enough Ether to fulfill the withdrawal request. This is a sanity check that should always be true if the contract logic is correct.

- Revert Statement (revert()):
Used in the forceRevert() function to demonstrate its usage. This function always reverts with an error message.

### Usage

- Deposit Ether:
Users can call the deposit() function and send Ether to the contract. The amount sent must be greater than zero.

- Withdraw Ether:
Users can call the withdraw(uint _amount) function to withdraw a specified amount of Ether from their balance. The function checks if the user has enough balance and if the contract can fulfill the withdrawal.

- Check Balance:
Users can call the getBalance() function to check their balance in the contract.

- Force Revert:
The forceRevert() function always reverts, demonstrating how revert() can be used to immediately terminate a function and revert all changes.

## Getting Started

### Executing the Program

To run this program, you can use Remix, an online Solidity IDE. Follow these steps:

1. Go to the [Remix website](https://remix.ethereum.org/).
2. Create a new file by clicking on the "+" icon in the left-hand sidebar.
3. Save the file with a `.sol` extension (e.g., `Functions and Errors.sol`).
4. Copy and paste the following Solidity code into the file --> [FileLink](https://github.com/Anshuman161203/metacrafters_ETH-AVAX-PROOF_Project_Module_1/blob/main/Functions%20and%20Errors.sol)
5. Click on the "Solidity Compiler" tab in the left-hand sidebar.
- Ensure the "Compiler" option is set to "0.8.4" (or another compatible version).
- Click on the "Compile Functions and Errors.sol" button.
6. Deploy the contract:
- Click on the "Deploy & Run Transactions" tab in the left-hand sidebar.
- Select the Functions and Errors contract from the dropdown menu.
- Click on the "Deploy" button.
7. Interact with the contract by calling the various functions (Require, Assert, and Revert) through the deployed contract interface.

## Project By
- Kurmeet Bishnoi


