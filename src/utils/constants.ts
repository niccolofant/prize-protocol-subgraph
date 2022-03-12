import { BigInt, Address } from "@graphprotocol/graph-ts";
import { CompoundPrizeLottery } from "../../generated/CompoundPrizeLottery/CompoundPrizeLottery";

export const PROTOCOL_ADDRESS = "0xdd36B97dEFe96515fA2463b235dc237474ddE17f";
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const TOKEN_ADDRESS = "0xD9BA894E0097f8cC2BBc9D24D308b98e36dc6D02";
export const TOKEN_NAME = "USDT";
export const TOKEN_SYMBOL = "USDT";
export const CTOKEN_ADDRESS = "0x2fB298BDbeF468638AD6653FF8376575ea41e768";
export const CTOKEN_NAME = "Compound USDT";
export const CTOKEN_SYMBOL = "cUSDT";
export const TICKET_ADDRESS = "0x95d28Ae99f5b32aBB1AE477Ab31b2B94bE2AaB9A";
export const TICKET_NAME = "Prize Ticket USDT Compound";
export const TICKET_SYMBOL = "ptUSDTc";
export const PRZ_TOKEN_ADDRESS = "0x8BF859bDd626801BC323DA964F0D5f8EF393682c";
export const PRZ_TOKEN_NAME = "Prize Token";
export const PRZ_TOKEN_SYMBOL = "PRZ";

export const ZERO = BigInt.fromI32(0);
export const ONE = BigInt.fromI32(1);

export const protocolContract = CompoundPrizeLottery.bind(
  Address.fromString(PROTOCOL_ADDRESS)
);
