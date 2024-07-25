# index.ts

The `index.ts` file within the `src/crons` directory of the `ferrumnet/multiswap-validator-node` repository serves as a central point for exporting cron job modules. This file essentially organizes and makes accessible the cron jobs defined in the project for periodic tasks.

Here's a detailed documentation of each function in the file `transactionsJob.ts` from the repository:

# transactionsJob.ts

### Function `transactionsJob`

-   Purpose: Serves as the main entry point for the transaction job scheduler.
-   Operations: Calls the `start` function to initiate the cron job.

### Function `start`

-   Purpose: Sets up a cron job that triggers every 3 seconds.
-   Operations:
    -   Creates a cron task that checks `isProccessRunning`.
    -   If false, it calls `triggerJobs` to process the transactions.
    -   Starts the cron task and handles any exceptions.

### Function `triggerJobs`

-   Purpose: Fetches and processes transactions.
-   Operations:
    -   Fetches transactions using `axiosService.getTransactions`.
    -   If transactions exist, sets `isProccessRunning` to true, processes each transaction through `handleJob`, then sets `isProccessRunning` back to false after processing.

### Function `handleJob`

-   Purpose: Processes individual transactions.
-   Parameters: `transaction` - the transaction object to be processed.
-   Operations:
    -   Checks if the transaction ID is in the local transaction hash list using `isHashInLocalList`.
    -   If not, adds it to the list and fetches chain data related to the transaction from the network using `transactionService.fetchChainDataFromNetwork`.

### Function `addTransactionHashInLocalList`

-   Purpose: Adds a transaction hash to the local list if it's not already present.
-   Parameters: `hash` - the transaction hash to add.
-   Operations: Pushes the hash into `localTransactionHashes`.

### Function `removeTransactionHashFromLocalList`

-   Purpose: Removes a transaction hash from the local list.
-   Parameters: `hash` - the transaction hash to remove.
-   Operations: Filters out the specified hash from `localTransactionHashes`.

### Function `isHashInLocalList`

-   Purpose: Checks if a transaction hash is already in the local list.
-   Parameters: `hash` - the transaction hash to check.
-   Returns: `boolean` - true if the hash is found, otherwise false.
-   Operations: Searches for the hash in `localTransactionHashes`.

The code utilizes the `cron` library for scheduling, and it heavily interacts with services defined in `../services/index` for its operations. Each function is designed to handle specific aspects of transaction processing within a node environment.