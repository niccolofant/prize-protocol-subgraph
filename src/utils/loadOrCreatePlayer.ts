import { Address } from "@graphprotocol/graph-ts";
import { Player } from "../../generated/schema";
import { ZERO } from "./constants";

export function loadOrCreatePlayer(address: Address): Player {
  let player = Player.load(address.toHex());

  if (!player) {
    player = new Player(address.toHex());
    player.balance = ZERO;
    player.save();
  }

  return player as Player;
}
