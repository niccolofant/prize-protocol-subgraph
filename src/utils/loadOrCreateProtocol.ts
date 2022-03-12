import { Address } from "@graphprotocol/graph-ts";
import { CompoundPrizeLottery } from "../../generated/CompoundPrizeLottery/CompoundPrizeLottery";
import { PrizeProtocol } from "../../generated/schema";
import {
  CTOKEN_ADDRESS,
  CTOKEN_NAME,
  CTOKEN_SYMBOL,
  PROTOCOL_ADDRESS,
  PRZ_TOKEN_ADDRESS,
  PRZ_TOKEN_NAME,
  PRZ_TOKEN_SYMBOL,
  TICKET_ADDRESS,
  TICKET_NAME,
  TICKET_SYMBOL,
  TOKEN_ADDRESS,
  TOKEN_NAME,
  TOKEN_SYMBOL,
  ZERO,
} from "./constants";

export const loadOrCreateProtocol = (): PrizeProtocol => {
  const contract = CompoundPrizeLottery.bind(
    Address.fromString(PROTOCOL_ADDRESS)
  );
  let protocol = PrizeProtocol.load("1");

  if (!protocol) {
    protocol = new PrizeProtocol("1");

    protocol.address = Address.fromString(PROTOCOL_ADDRESS);
    protocol.name = contract.name();
    protocol.owner = contract.owner();
    protocol.controller = contract.controller();
    protocol.drawingPeriod = contract.DRAWING_PERIOD();
    protocol.minimumDeposit = contract.MINIMUM_DEPOSIT();
    protocol.token = Address.fromString(TOKEN_ADDRESS);
    protocol.tokenName = TOKEN_NAME;
    protocol.tokenSymbol = TOKEN_SYMBOL;
    protocol.cToken = Address.fromString(CTOKEN_ADDRESS);
    protocol.cTokenName = CTOKEN_NAME;
    protocol.cTokenSymbol = CTOKEN_SYMBOL;
    protocol.nativeToken = Address.fromString(PRZ_TOKEN_ADDRESS);
    protocol.nativeTokenName = PRZ_TOKEN_NAME;
    protocol.nativeTokenSymbol = PRZ_TOKEN_SYMBOL;
    protocol.ticket = Address.fromString(TICKET_ADDRESS);
    protocol.ticketName = TICKET_NAME;
    protocol.ticketSymbol = TICKET_SYMBOL;
    protocol.amountDeposited = contract.balanceOfUnderlyingCompound();
    protocol.reserve = ZERO;
    protocol.prizePool = contract.prizePool();
    protocol.save();
  }

  return protocol as PrizeProtocol;
};
