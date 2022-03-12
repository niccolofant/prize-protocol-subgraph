import { store } from "@graphprotocol/graph-ts";
import {
  CompoundPrizeLottery,
  ControllerRoleTransferred,
  LotteryStarted,
  LotteryWinnerAwarded,
  RandomNumberRequested,
  OwnershipTransferred,
  PlayerDeposited,
  ReserveSupplied,
  StateChanged,
  PlayerRedeemed,
  RandomNumberReceived,
} from "../../generated/CompoundPrizeLottery/CompoundPrizeLottery";
import { ZERO } from "../utils/constants";
import { loadOrCreateDeposit } from "../utils/loadOrCreateDeposit";
import { loadOrCreateLottery } from "../utils/loadOrCreateLottery";
import { loadOrCreatePlayer } from "../utils/loadOrCreatePlayer";
import { loadOrCreateProtocol } from "../utils/loadOrCreateProtocol";
import { loadOrCreateRedeem } from "../utils/loadOrCreateRedeem";
import { loadOrCreateWin } from "../utils/loadOrCreateWin";

export function handleLotteryStarted(event: LotteryStarted): void {
  const protocol = loadOrCreateProtocol();
  const lottery = loadOrCreateLottery(event.params.lotteryId.toString());

  lottery.startTimestamp = event.params.lotteryStart;
  lottery.amountDeposited = protocol.amountDeposited;
  lottery.reserve = protocol.reserve;
  lottery.prizePool = protocol.prizePool;
  lottery.save();
}

export function handleReserveSupplied(event: ReserveSupplied): void {
  const contract = CompoundPrizeLottery.bind(event.address);
  const protocol = loadOrCreateProtocol();
  const lottery = loadOrCreateLottery(event.params.lotteryId.toString());

  protocol.reserve = protocol.reserve.plus(event.params.amount);
  protocol.prizePool = contract.prizePool();
  protocol.save();

  lottery.reserve = protocol.reserve;
  lottery.prizePool = protocol.prizePool;
  lottery.save();
}

export function handlePlayerDeposited(event: PlayerDeposited): void {
  const contract = CompoundPrizeLottery.bind(event.address);
  const protocol = loadOrCreateProtocol();
  const lottery = loadOrCreateLottery(event.params.lotteryId.toString());
  const player = loadOrCreatePlayer(event.params.player);
  const deposit = loadOrCreateDeposit(event.transaction.hash);

  protocol.amountDeposited = protocol.amountDeposited.plus(event.params.amount);
  protocol.prizePool = contract.prizePool();
  protocol.save();

  lottery.amountDeposited = protocol.amountDeposited;
  lottery.prizePool = protocol.prizePool;
  lottery.save();

  player.address = event.params.player;
  player.protocol = protocol.id;
  player.lottery = lottery.id;
  player.balance = player.balance.plus(event.params.amount);
  player.save();

  deposit.timestamp = event.block.timestamp;
  deposit.protocol = protocol.id;
  deposit.lottery = lottery.id;
  deposit.from = player.id;
  deposit.amount = event.params.amount;
  deposit.save();
}

export function handlePlayerRedeemed(event: PlayerRedeemed): void {
  const contract = CompoundPrizeLottery.bind(event.address);
  const protocol = loadOrCreateProtocol();
  const lottery = loadOrCreateLottery(event.params.lotteryId.toString());
  const player = loadOrCreatePlayer(event.params.player);
  const redeem = loadOrCreateRedeem(event.transaction.hash);

  protocol.amountDeposited = protocol.amountDeposited.minus(
    event.params.amount
  );
  protocol.prizePool = contract.prizePool();
  protocol.save();

  lottery.amountDeposited = protocol.amountDeposited;
  lottery.prizePool = protocol.prizePool;
  lottery.save();

  player.balance = player.balance.minus(event.params.amount);
  player.save();
  if (player.balance == ZERO) store.remove("Player", player.address.toHex());

  redeem.timestamp = event.block.timestamp;
  redeem.protocol = protocol.id;
  redeem.lottery = lottery.id;
  redeem.from = player.id;
  redeem.amount = event.params.amount;
  redeem.save();
}

export function handleRandomNumberRequested(
  event: RandomNumberRequested
): void {
  const contract = CompoundPrizeLottery.bind(event.address);
  const protocol = loadOrCreateProtocol();
  const lottery = loadOrCreateLottery(event.params.lotteryId.toString());

  protocol.prizePool = contract.prizePool();
  protocol.save();

  lottery.prizePool = protocol.prizePool;
  lottery.save();
}

export function handleLotteryWinnerAwarded(event: LotteryWinnerAwarded): void {
  const contract = CompoundPrizeLottery.bind(event.address);
  const protocol = loadOrCreateProtocol();
  const lottery = loadOrCreateLottery(event.params.lotteryId.toString());
  const player = loadOrCreatePlayer(event.params.player);
  const win = loadOrCreateWin(event.transaction.hash);

  protocol.prizePool = contract.prizePool();
  protocol.save();

  win.timestamp = event.params.lotteryEnd;
  win.winner = event.params.player.toHex();
  win.amount = protocol.prizePool;
  win.protocol = protocol.id;
  win.lottery = event.params.lotteryId.toString();
  win.save();

  lottery.endTimestamp = event.params.lotteryEnd;
  lottery.prizePool = protocol.prizePool;
  lottery.win = win.id;
  lottery.save();

  player.balance = player.balance.plus(event.params.amount);
  player.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  const protocol = loadOrCreateProtocol();

  protocol.owner = event.params.newOwner;
  protocol.save();
}

export function handleControllerRoleTransferred(
  event: ControllerRoleTransferred
): void {
  const protocol = loadOrCreateProtocol();

  protocol.controller = event.params.newController;
  protocol.save();
}

export function handleStateChanged(event: StateChanged): void {
  const state = ["Open", "Closed", "Awarding_Winner", "Randomness_Fulfilled"];

  if (event.params.lotteryId != ZERO) {
    const lottery = loadOrCreateLottery(event.params.lotteryId.toString());

    lottery.state = state[event.params.newState];
    lottery.save();
  }
}
