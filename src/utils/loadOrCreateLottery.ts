import { Lottery } from "../../generated/schema";

export function loadOrCreateLottery(lotteryStateId: string): Lottery {
  let lottery = Lottery.load(lotteryStateId);

  if (!lottery) {
    lottery = new Lottery(lotteryStateId);
    lottery.protocol = "1";
    lottery.save();
  }

  return lottery as Lottery;
}
