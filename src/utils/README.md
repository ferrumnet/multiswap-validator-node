# awsSecretsManager.ts

The file `awsSecretsManager.ts` from the GitHub repository contains a utility function for interacting with AWS Secrets Manager. Here's a detailed documentation of the function within this file:

#### Function: `awsSecretsManager`

Description:

-   This asynchronous function interacts with AWS Secrets Manager to fetch secrets using the SDK. It's designed to be used in a Node.js environment where AWS SDK is configured.

Parameters:

-   None directly; utilizes environment variables for configuration.

Returns:

-   A promise that resolves to an empty string on successful retrieval and application of secrets or rejects with an empty string in case of any errors.

Detailed Behavior:

1.  Initialize AWS SecretsManager Client:

    -   The function starts by creating an instance of `AWS.SecretsManager` with the AWS region set from the `REGION` environment variable.
2.  Fetch Secret Value:

    -   It then calls `getSecretValue` with the `SECRET_NAME` environment variable to retrieve the secret.
3.  Error Handling:

    -   If there is an error during the fetch, it logs the error and rejects the promise.
4.  Process Secret String:

    -   If the secret is retrieved successfully, it checks if the response contains a `SecretString`.
    -   If present, the `SecretString` is parsed into JSON, and its contents are merged into a global `AWS_ENVIRONMENT` variable for application-wide access.
5.  Promise Resolution:

    -   The promise is resolved after processing the secret or immediately with an empty string if there's an error or no `SecretString`.

Usage:

-   This function can be imported and used in other parts of a Node.js application where AWS secrets are needed for configuration.

# logger.ts

Here is a detailed documentation of each function and element in the `logger.ts` file from the repository:

### `logger.ts`

#### Imports:

-   winston: A popular logging library for Node.js. It is imported to create and configure the logger instance.

#### `enumerateErrorFormat`

-   Type: `winston.format`
-   Description: This is a custom formatter function for Winston that checks if the logged information is an instance of `Error`. If it is, the function modifies the `info` object to replace its `message` attribute with the stack trace of the error. This helps in logging more descriptive error messages.

#### `logger`

-   Type: `winston.Logger`
-   Description: This is the main logger instance for the application.
-   Configuration:
    -   level: The log level is set based on the `ENVIRONMENT` environment variable, allowing for dynamic verbosity control based on the deployment environment.
    -   format: It combines several formats:
        -   `enumerateErrorFormat()`: Applies the custom error formatting logic described above.
        -   `winston.format.uncolorize()`: Removes color information from the log output, useful for non-TTY environments.
        -   `winston.format.splat()`: Enables string interpolation for logging messages.
        -   `winston.format.printf()`: Formats the log messages to display the level and message.
    -   transports:
        -   Console: Configures the logger to output to the console. `stderrLevels` is set to include "error", meaning `error` level logs will be output to `stderr` instead of `stdout`.

#### Export

-   The `logger` instance is exported as a default export from the module, allowing it to be easily imported and used throughout the application.