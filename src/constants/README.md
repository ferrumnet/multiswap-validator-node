# constants.ts

Here is the detailed documentation for each function and constant in the `constants.ts` file from the repository:

### Constants

-   `NAME`: Represents the name of the fund manager system, set to `"FUND_MANAGER"`.
-   `VERSION`: Current version of the system, set to `"000.004"`.
-   `CUDOS_CHAIN_ID`: Specifies the chain ID for the Cudos network, set to `"cudos-1"`.
-   `FOUNDARY`: A label used within the system, set to `"Foundary"`.
-   `ONE_INCH`: A label representing the 1Inch exchange, set to `"1Inch"`.
-   `BEARER`: Prefix for bearer tokens, set to `"Bearer "`.
-   `NETWORKS`: An array of network configurations each containing `chainId`, `fundManagerAddress`, `fiberRouterAddress`, and `foundaryTokenAddress`.

### Functions

-   `getSecurityKey`: Combines AWS environment security key and a process environment variable to form a complete security key.
-   `getPrivateKey`: Retrieves and decrypts the private key from environment variables using the security key obtained from `getSecurityKey()`.
-   `createAuthTokenForMultiswapBackend`: Generates a time-based authentication token for interacting with the multiswap backend. It creates a token valid from one minute before to one minute after its creation time.
-   `encrypt`: Encrypts a given string data with a specified key using AES encryption from the CryptoJS library.
-   `decrypt`: Decrypts AES encrypted data using a specified key to retrieve the original string.
-   `getThreshold`: Returns twice the given threshold value. This could be used for setting limits or thresholds in operations.
-   `isAllowedPublicAddress`: Checks if a given node address is included in the allowed addresses from the AWS environment configuration.
-   `getRpcNodesData`: Retrieves and parses the RPC nodes data from the AWS environment settings.

This documentation outlines the purpose and functionality of each component in the `constants.ts` file, which seems to be integral to the configuration and operation of a multiswap validator node within the Ferrum network.

# IERC20

The IERC20.json file defines the interface for a standard ERC20 token, adhering to the Ethereum token standard specification. This interface includes essential functionalities for token transactions, including transfers, approvals, and balance checks.

# FiberRouter.json
Overview

The FiberRouter.json file from the ferrumnet/multiswap-validator-node repository contains a JSON object representing a smart contract interface for a "Fiber Router." This interface is likely used to interact with blockchain networks, facilitating operations such as swapping, liquidity provision, or routing transactions across different platforms.

Interface Details

Contract Name: The JSON is an interface for a contract named FiberRouter.

Compiler Version: The interface was compiled with Solidity version 0.8.0.

Optimization Enabled: Yes, with 200 runs.

EVM Version: The target EVM version for this contract is specified as Default.

Methods

1. swapExactTokensForTokens

Type: Function

Inputs:

amountIn: The amount of input tokens to swap.

amountOutMin: The minimum amount of output tokens that must be received for the transaction not to revert.

path: An array of token addresses used to determine the swap route.

to: The address to send the output tokens to.

deadline: A timestamp by which the transaction must be completed, or it will revert.

Outputs:

Array: Returns an array of numbers indicating the amounts of tokens received for each swap in the path.

State Mutability: Nonpayable

Details: This method facilitates a token swap operation, ensuring that the number of output tokens received is at least the amountOutMin specified, following the swap path provided.

2. swapTokensForExactTokens

Type: Function

Inputs:

amountOut: The exact amount of output tokens to receive.

amountInMax: The maximum amount of input tokens that can be swapped.

path: The route of token addresses for the swap.

to: The recipient address for the output tokens.

deadline: The transaction deadline.

Outputs:

Array: Outputs the amounts of tokens spent for each swap in the path.

State Mutability: Nonpayable

Details: Allows users to specify the exact amount of tokens they want to receive, the method calculates and limits the input to amountInMax.

Events

1. Swap

Inputs:

sender: The address initiating the swap.

amountIn: The amount of input tokens provided for the swap.

amountOut: The amount of output tokens received from the swap.

tokenIn: The address of the input token.

tokenOut: The address of the output token.

to: The recipient address.

Details: This event is emitted after a successful swap operation, detailing the swap amounts and the addresses involved.

Conclusion

The FiberRouter.json file defines an interface for a contract facilitating token swaps on a blockchain network, providing methods for exact or minimum token swaps along specified paths. It also includes an event to log swap operations. This documentation should assist auditors in understanding the contract's functionalities and intended behaviors.

# utils.ts

Here's the detailed documentation for each function found in the `utils.ts` file of the `multiswap-validator-node` repository:

### 1\. erc20 function

Parameters:

-   `web3`: A web3 instance used to interact with Ethereum blockchain.
-   `token`: The contract address of the ERC20 token.

Returns: An instance of the web3.eth.Contract for the specified token using the ERC20 ABI.

Description: This function creates and returns a web3.eth.Contract instance for a given ERC20 token address, facilitating interactions with the smart contract.

### 2\. decimals function

Parameters:

-   `web3`: A web3 instance.
-   `token`: The contract address of the ERC20 token.

Returns: The number of decimals of the token as a promise or null if inputs are invalid.

Description: This asynchronous function retrieves the number of decimals for a given ERC20 token using its contract instance.

### 3\. removeExponential function

Returns: A string representing the number in non-exponential form.

Description: Converts a number from exponential notation to a normal string representation without exponential notation, especially useful for displaying numbers in user interfaces.

### 4\. numberIntoDecimals function

Parameters:

-   `amount`: The amount to convert.
-   `decimal`: The number of decimals to consider.

Returns: A formatted string of the amount with the specified number of decimals.

Description: Converts a numeric amount into a string representation with a specified number of decimals, applying formatting to remove exponential notation.

### 5\. decimalsIntoNumber function

Parameters:

-   `amount`: The amount in the smallest unit.
-   `decimal`: The decimal units to convert to.

Returns: A string representing the amount adjusted for the specified decimal places.

Description: Converts a value from its smallest unit representation (like wei in Ethereum) to a human-readable format considering the decimal places.

### 6\. withSlippage function

Parameters:

-   `value`: The original value.
-   `slippage`: The percentage of slippage.

Returns: The value adjusted for the specified slippage percentage.

Description: Adjusts a numeric value by a specified slippage percentage, ensuring that the output is in non-exponential form for better readability.