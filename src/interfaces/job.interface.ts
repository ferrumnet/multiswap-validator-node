import { Transaction, TransactionReceipt } from "../interfaces";

export interface JobRequestBody {
  name: string;
  isSourceNonEVM: boolean;
  destinationRpcURL: string;
  isDestinationNonEVM: boolean;
  bridgeAmount: string;
  txId: string;
  threshold: number;
  sourceAssetType: string;
  destinationAssetType: string;
  destinationAmountIn: string;
  destinationAmountOut: string;
  sourceOneInchData: string;
  destinationOneInchData: string;
  expiry: number;
  targetToken: string;
  sourceChainId: string;
  destinationChaibId: string;
  slippage: number;
  isCCTP: boolean;
  minDestinationAmountIn: string;
  dbSettledAmount: string;
}

export interface UpdateJobRequestBody {
  transaction: Transaction;
  transactionReceipt: TransactionReceipt;
}

export interface RpcNode {
  url: string;
  chainId: string;
}
