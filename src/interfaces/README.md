# index.ts

The `index.ts` file within the `src/interfaces` directory of the `ferrumnet/multiswap-validator-node` repository serves as a central point for exporting modules. This file essentially organizes and makes accessible the defined modules in the project for periodic tasks.

# job.interface.ts

The file `job.interface.ts` from the repository contains several TypeScript interfaces that define the structure for job request bodies and RPC nodes in the MultiSwap Validator Node system. Here's a detailed breakdown of each interface:

### 1\. `JobRequestBody` Interface

This interface represents the structure for the request body when creating or updating a job. It includes various fields pertinent to job transactions:

- `name`: A `string` indicating the name of the job.
- `isSourceNonEVM`: A `boolean` indicating whether the source chain is a non-EVM (Ethereum Virtual Machine) chain.
- `destinationRpcURL`: A `string` with the RPC URL of the destination chain.
- `isDestinationNonEVM`: A `boolean` indicating whether the destination chain is non-EVM.
- `bridgeAmount`: A `string` representing the amount to bridge.
- `txId`: A `string` representing the transaction ID.
- `threshold`: A `number` representing the threshold amount for the transaction.
- `sourceAssetType`: A `string` detailing the type of asset on the source chain.
- `destinationAssetType`: A `string` detailing the type of asset on the destination chain.
- `destinationAmountIn`: A `string` representing the input amount on the destination.
- `destinationAmountOut`: A `string` representing the output amount on the destination.
- `sourceOneInchData`: A `string` for 1inch API data related to the source.
- `destinationOneInchData`: A `string` for 1inch API data related to the destination.
- `expiry`: A `number` representing the expiration time of the job.
- `targetToken`: A `string` identifying the target token.
- `sourceChainId`: A `string` for the source blockchain's chain ID.
- `destinationChaibId`: A `string` for the destination blockchain's chain ID (Note: This seems like a typo, it should likely be `destinationChainId`).
- `slippage`: A `number` representing the allowed slippage for the transaction.
- `isSameNetworkSwap`: A boolean indicating if the swap is form same network.
- `isCCTP`: A boolean indicating if the swap is form CCTP protocol.
- `minDestinationAmountIn`: A `string` for the minimum destination amount in.
- `dbSettledAmount`: A `string` for the database saved settled amount.

### 2\. `UpdateJobRequestBody` Interface

This interface is used for updating a job with transaction details:

- `transaction`: An object of type `Transaction` containing transaction details.
- `transactionReceipt`: An object of type `TransactionReceipt` containing the receipt of the transaction.

### 3\. `RpcNode` Interface

Defines the structure for RPC (Remote Procedure Call) nodes:

- `url`: A `string` representing the URL of the RPC node.
- `chainId`: A `string` representing the chain ID of the blockchain associated with the RPC node.

This documentation outlines the data structures used for handling job transactions within the MultiSwap Validator Node system, emphasizing the integrative role of non-EVM and EVM chains in transaction processes.

# web3.interface.ts

The file `web3.interface.ts` from the `ferrumnet/multiswap-validator-node` repository contains TypeScript interfaces that define the structure of objects related to Ethereum blockchain transactions. Here is a detailed documentation of each interface in the file:

### Interface: `Transaction`

Defines the structure of an Ethereum transaction.

- `hash`: A string representing the unique hash of the transaction.
- `nonce`: A number that represents the number of transactions sent from the sender's address.
- `blockHash`: A string or null, representing the hash of the block containing the transaction; null if the transaction is pending.
- `blockNumber`: A number or null, representing the block number containing the transaction; null if the transaction is pending.
- `transactionIndex`: A number or null, indicating the index position of the transaction in the block.
- `from`: A string representing the address of the sender.
- `to`: A string or null, representing the address of the receiver. Null if it's a contract creation transaction.
- `value`: A string representing the amount of Ether transferred in Wei.
- `gasPrice`: A string representing the gas price set by the sender in Wei.
- `maxPriorityFeePerGas`: An optional number, string, or any type, representing the maximum priority fee per gas offered.
- `maxFeePerGas`: An optional number, string, or any type, representing the maximum fee per gas offered.
- `gas`: A number indicating the amount of gas provided for the transaction.
- `input`: A string representing the data sent along with the transaction.

### Interface: `TransactionReceipt`

Defines the structure of a transaction receipt, which is the outcome of a transaction.

- `status`: A boolean indicating if the transaction was successful.
- `transactionHash`: A string representing the hash of the transaction.
- `transactionIndex`: A number indicating the position of the transaction within the block.
- `blockHash`: A string representing the hash of the block containing the transaction.
- `blockNumber`: A number representing the block number containing the transaction.
- `from`: A string representing the sender's address.
- `to`: A string representing the receiver's address.
- `contractAddress`: An optional string representing the contract address created, if the transaction was a contract creation.
- `cumulativeGasUsed`: A number indicating the total gas used in the block containing the transaction.
- `gasUsed`: A number representing the amount of gas used by the transaction.
- `effectiveGasPrice`: A number representing the effective gas price paid.
- `logs`: An array of `Log` objects representing the logs produced by the transaction.
- `logsBloom`: A string representing the bloom filter of the logs.
- `events`: An optional dictionary of event names to `EventLog` objects that were emitted.

### Interface: `EventLog`

Represents an event log from a transaction.

- `event`: A string representing the name of the event.
- `address`: A string representing the address where the event occurred.
- `returnValues`: Any type, representing the values returned by the event.
- `logIndex`: A number indicating the log index position.
- `transactionIndex`: A number indicating the transaction's index position in the block.
- `transactionHash`: A string representing the hash of the transaction.
- `blockHash`: A string representing the hash of the block containing the event.
- `blockNumber`: A number indicating the block number of the event.
- `raw`: An optional object containing `data`, a string, and `topics`, an array of any type.

### Interface: `Log`

Defines the structure of a log entry.

- `address`: A string representing the address that generated the log.
- `data`: A string containing the logged data.
- `topics`: An array of strings representing the topics of the log.
- `logIndex`: A number indicating the log's index position within the block.
- `transactionIndex`: A number indicating the transaction's index position within the block.
- `transactionHash`: A string representing the hash of the transaction that generated the log.
- `blockHash`: A string representing the hash of the block containing the log.
- `blockNumber`: A number indicating the block number of the log.
- `removed`: A boolean indicating if the log was removed due to a chain reorganization.

These interfaces are crucial for applications interacting with Ethereum, providing a structured way to handle data related to transactions and their outcomes.
