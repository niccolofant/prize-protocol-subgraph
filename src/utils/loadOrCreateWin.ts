import { Bytes } from "@graphprotocol/graph-ts";
import { Win } from "../../generated/schema";

export function loadOrCreateWin(transactionHash: Bytes): Win {
  let win = Win.load(transactionHash.toHex());

  if (!win) {
    win = new Win(transactionHash.toHex());
    win.save();
  }

  return win as Win;
}
