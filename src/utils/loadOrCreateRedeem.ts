import { Bytes } from "@graphprotocol/graph-ts";
import { Redeem } from "../../generated/schema";

export function loadOrCreateRedeem(transactionHash: Bytes): Redeem {
  let redeem = Redeem.load(transactionHash.toHex());

  if (!redeem) {
    redeem = new Redeem(transactionHash.toHex());
    redeem.save();
  }

  return redeem as Redeem;
}
