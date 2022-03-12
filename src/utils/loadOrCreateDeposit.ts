import { Bytes } from "@graphprotocol/graph-ts";
import { Deposit } from "../../generated/schema";

export function loadOrCreateDeposit(transactionHash: Bytes): Deposit {
  let deposit = Deposit.load(transactionHash.toHex());

  if (!deposit) {
    deposit = new Deposit(transactionHash.toHex());
    deposit.save();
  }

  return deposit as Deposit;
}
