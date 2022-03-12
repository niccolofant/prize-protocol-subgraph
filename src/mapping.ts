import { BigInt } from "@graphprotocol/graph-ts"
import {
  CompoundPrizeLottery,
  ControllerRoleTransferred,
  LotteryStarted,
  LotteryWinnerAwarded,
  OwnershipTransferred,
  PlayerDeposited,
  PlayerRedeemed,
  RandomNumberReceived,
  RandomNumberRequested,
  RedeemedFromCompound,
  RedeemedUnderlyingFromCompound,
  ReserveSupplied,
  StateChanged,
  SuppliedToCompound
} from "../generated/CompoundPrizeLottery/CompoundPrizeLottery"
import { ExampleEntity } from "../generated/schema"

export function handleControllerRoleTransferred(
  event: ControllerRoleTransferred
): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.oldController = event.params.oldController
  entity.newController = event.params.newController

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.DRAWING_PERIOD(...)
  // - contract.MINIMUM_DEPOSIT(...)
  // - contract.balanceOfUnderlyingCompound(...)
  // - contract.checkUpkeep(...)
  // - contract.controller(...)
  // - contract.deposit(...)
  // - contract.exchangeRateCompound(...)
  // - contract.getCtoken(...)
  // - contract.getTicket(...)
  // - contract.getToken(...)
  // - contract.isLotteryEmpty(...)
  // - contract.isPickValid(...)
  // - contract.latestLotteryTimestamp(...)
  // - contract.lotteryId(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.prizePool(...)
  // - contract.redeem(...)
  // - contract.state(...)
  // - contract.supplyRatePerBlockCompound(...)
}

export function handleLotteryStarted(event: LotteryStarted): void {}

export function handleLotteryWinnerAwarded(event: LotteryWinnerAwarded): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePlayerDeposited(event: PlayerDeposited): void {}

export function handlePlayerRedeemed(event: PlayerRedeemed): void {}

export function handleRandomNumberReceived(event: RandomNumberReceived): void {}

export function handleRandomNumberRequested(
  event: RandomNumberRequested
): void {}

export function handleRedeemedFromCompound(event: RedeemedFromCompound): void {}

export function handleRedeemedUnderlyingFromCompound(
  event: RedeemedUnderlyingFromCompound
): void {}

export function handleReserveSupplied(event: ReserveSupplied): void {}

export function handleStateChanged(event: StateChanged): void {}

export function handleSuppliedToCompound(event: SuppliedToCompound): void {}
