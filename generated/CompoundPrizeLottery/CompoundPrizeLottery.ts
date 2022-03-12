// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ControllerRoleTransferred extends ethereum.Event {
  get params(): ControllerRoleTransferred__Params {
    return new ControllerRoleTransferred__Params(this);
  }
}

export class ControllerRoleTransferred__Params {
  _event: ControllerRoleTransferred;

  constructor(event: ControllerRoleTransferred) {
    this._event = event;
  }

  get oldController(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newController(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class LotteryStarted extends ethereum.Event {
  get params(): LotteryStarted__Params {
    return new LotteryStarted__Params(this);
  }
}

export class LotteryStarted__Params {
  _event: LotteryStarted;

  constructor(event: LotteryStarted) {
    this._event = event;
  }

  get lotteryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get lotteryStart(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get cToken(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class LotteryWinnerAwarded extends ethereum.Event {
  get params(): LotteryWinnerAwarded__Params {
    return new LotteryWinnerAwarded__Params(this);
  }
}

export class LotteryWinnerAwarded__Params {
  _event: LotteryWinnerAwarded;

  constructor(event: LotteryWinnerAwarded) {
    this._event = event;
  }

  get lotteryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get player(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get lotteryEnd(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PlayerDeposited extends ethereum.Event {
  get params(): PlayerDeposited__Params {
    return new PlayerDeposited__Params(this);
  }
}

export class PlayerDeposited__Params {
  _event: PlayerDeposited;

  constructor(event: PlayerDeposited) {
    this._event = event;
  }

  get lotteryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get player(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class PlayerRedeemed extends ethereum.Event {
  get params(): PlayerRedeemed__Params {
    return new PlayerRedeemed__Params(this);
  }
}

export class PlayerRedeemed__Params {
  _event: PlayerRedeemed;

  constructor(event: PlayerRedeemed) {
    this._event = event;
  }

  get lotteryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get player(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RandomNumberReceived extends ethereum.Event {
  get params(): RandomNumberReceived__Params {
    return new RandomNumberReceived__Params(this);
  }
}

export class RandomNumberReceived__Params {
  _event: RandomNumberReceived;

  constructor(event: RandomNumberReceived) {
    this._event = event;
  }

  get lotteryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get subscriptionId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get randomNumber(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RandomNumberRequested extends ethereum.Event {
  get params(): RandomNumberRequested__Params {
    return new RandomNumberRequested__Params(this);
  }
}

export class RandomNumberRequested__Params {
  _event: RandomNumberRequested;

  constructor(event: RandomNumberRequested) {
    this._event = event;
  }

  get lotteryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get subscriptionId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get requestId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RedeemedFromCompound extends ethereum.Event {
  get params(): RedeemedFromCompound__Params {
    return new RedeemedFromCompound__Params(this);
  }
}

export class RedeemedFromCompound__Params {
  _event: RedeemedFromCompound;

  constructor(event: RedeemedFromCompound) {
    this._event = event;
  }

  get cToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get cTokenAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RedeemedUnderlyingFromCompound extends ethereum.Event {
  get params(): RedeemedUnderlyingFromCompound__Params {
    return new RedeemedUnderlyingFromCompound__Params(this);
  }
}

export class RedeemedUnderlyingFromCompound__Params {
  _event: RedeemedUnderlyingFromCompound;

  constructor(event: RedeemedUnderlyingFromCompound) {
    this._event = event;
  }

  get cToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ReserveSupplied extends ethereum.Event {
  get params(): ReserveSupplied__Params {
    return new ReserveSupplied__Params(this);
  }
}

export class ReserveSupplied__Params {
  _event: ReserveSupplied;

  constructor(event: ReserveSupplied) {
    this._event = event;
  }

  get lotteryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class StateChanged extends ethereum.Event {
  get params(): StateChanged__Params {
    return new StateChanged__Params(this);
  }
}

export class StateChanged__Params {
  _event: StateChanged;

  constructor(event: StateChanged) {
    this._event = event;
  }

  get lotteryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get oldState(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get newState(): i32 {
    return this._event.parameters[2].value.toI32();
  }
}

export class SuppliedToCompound extends ethereum.Event {
  get params(): SuppliedToCompound__Params {
    return new SuppliedToCompound__Params(this);
  }
}

export class SuppliedToCompound__Params {
  _event: SuppliedToCompound;

  constructor(event: SuppliedToCompound) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get cToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CompoundPrizeLottery__depositResult {
  value0: Bytes;
  value1: BigInt;

  constructor(value0: Bytes, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class CompoundPrizeLottery extends ethereum.SmartContract {
  static bind(address: Address): CompoundPrizeLottery {
    return new CompoundPrizeLottery("CompoundPrizeLottery", address);
  }

  DRAWING_PERIOD(): BigInt {
    let result = super.call("DRAWING_PERIOD", "DRAWING_PERIOD():(uint256)", []);

    return result[0].toBigInt();
  }

  try_DRAWING_PERIOD(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "DRAWING_PERIOD",
      "DRAWING_PERIOD():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MINIMUM_DEPOSIT(): BigInt {
    let result = super.call(
      "MINIMUM_DEPOSIT",
      "MINIMUM_DEPOSIT():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MINIMUM_DEPOSIT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MINIMUM_DEPOSIT",
      "MINIMUM_DEPOSIT():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfUnderlyingCompound(): BigInt {
    let result = super.call(
      "balanceOfUnderlyingCompound",
      "balanceOfUnderlyingCompound():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_balanceOfUnderlyingCompound(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOfUnderlyingCompound",
      "balanceOfUnderlyingCompound():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  checkUpkeep(): boolean {
    let result = super.call("checkUpkeep", "checkUpkeep():(bool)", []);

    return result[0].toBoolean();
  }

  try_checkUpkeep(): ethereum.CallResult<boolean> {
    let result = super.tryCall("checkUpkeep", "checkUpkeep():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  controller(): Address {
    let result = super.call("controller", "controller():(address)", []);

    return result[0].toAddress();
  }

  try_controller(): ethereum.CallResult<Address> {
    let result = super.tryCall("controller", "controller():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deposit(_amount: BigInt): CompoundPrizeLottery__depositResult {
    let result = super.call("deposit", "deposit(uint256):(bytes32,uint256)", [
      ethereum.Value.fromUnsignedBigInt(_amount)
    ]);

    return new CompoundPrizeLottery__depositResult(
      result[0].toBytes(),
      result[1].toBigInt()
    );
  }

  try_deposit(
    _amount: BigInt
  ): ethereum.CallResult<CompoundPrizeLottery__depositResult> {
    let result = super.tryCall(
      "deposit",
      "deposit(uint256):(bytes32,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_amount)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CompoundPrizeLottery__depositResult(
        value[0].toBytes(),
        value[1].toBigInt()
      )
    );
  }

  exchangeRateCompound(): BigInt {
    let result = super.call(
      "exchangeRateCompound",
      "exchangeRateCompound():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_exchangeRateCompound(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "exchangeRateCompound",
      "exchangeRateCompound():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCtoken(): Address {
    let result = super.call("getCtoken", "getCtoken():(address)", []);

    return result[0].toAddress();
  }

  try_getCtoken(): ethereum.CallResult<Address> {
    let result = super.tryCall("getCtoken", "getCtoken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTicket(): Address {
    let result = super.call("getTicket", "getTicket():(address)", []);

    return result[0].toAddress();
  }

  try_getTicket(): ethereum.CallResult<Address> {
    let result = super.tryCall("getTicket", "getTicket():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getToken(): Address {
    let result = super.call("getToken", "getToken():(address)", []);

    return result[0].toAddress();
  }

  try_getToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("getToken", "getToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isLotteryEmpty(): boolean {
    let result = super.call("isLotteryEmpty", "isLotteryEmpty():(bool)", []);

    return result[0].toBoolean();
  }

  try_isLotteryEmpty(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isLotteryEmpty", "isLotteryEmpty():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isPickValid(_playerPicked: Address): boolean {
    let result = super.call("isPickValid", "isPickValid(address):(bool)", [
      ethereum.Value.fromAddress(_playerPicked)
    ]);

    return result[0].toBoolean();
  }

  try_isPickValid(_playerPicked: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPickValid", "isPickValid(address):(bool)", [
      ethereum.Value.fromAddress(_playerPicked)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  latestLotteryTimestamp(): BigInt {
    let result = super.call(
      "latestLotteryTimestamp",
      "latestLotteryTimestamp():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_latestLotteryTimestamp(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "latestLotteryTimestamp",
      "latestLotteryTimestamp():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lotteryId(): BigInt {
    let result = super.call("lotteryId", "lotteryId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lotteryId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("lotteryId", "lotteryId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  prizePool(): BigInt {
    let result = super.call("prizePool", "prizePool():(uint256)", []);

    return result[0].toBigInt();
  }

  try_prizePool(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("prizePool", "prizePool():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  redeem(_tokenAmount: BigInt): BigInt {
    let result = super.call("redeem", "redeem(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_tokenAmount)
    ]);

    return result[0].toBigInt();
  }

  try_redeem(_tokenAmount: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("redeem", "redeem(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_tokenAmount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  state(): i32 {
    let result = super.call("state", "state():(uint8)", []);

    return result[0].toI32();
  }

  try_state(): ethereum.CallResult<i32> {
    let result = super.tryCall("state", "state():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  supplyRatePerBlockCompound(): BigInt {
    let result = super.call(
      "supplyRatePerBlockCompound",
      "supplyRatePerBlockCompound():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_supplyRatePerBlockCompound(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "supplyRatePerBlockCompound",
      "supplyRatePerBlockCompound():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _ticket(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _cToken(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _subscriptionId(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _vrfCoordinator(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _keyHash(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BalanceOfUnderlyingCompoundCall extends ethereum.Call {
  get inputs(): BalanceOfUnderlyingCompoundCall__Inputs {
    return new BalanceOfUnderlyingCompoundCall__Inputs(this);
  }

  get outputs(): BalanceOfUnderlyingCompoundCall__Outputs {
    return new BalanceOfUnderlyingCompoundCall__Outputs(this);
  }
}

export class BalanceOfUnderlyingCompoundCall__Inputs {
  _call: BalanceOfUnderlyingCompoundCall;

  constructor(call: BalanceOfUnderlyingCompoundCall) {
    this._call = call;
  }
}

export class BalanceOfUnderlyingCompoundCall__Outputs {
  _call: BalanceOfUnderlyingCompoundCall;

  constructor(call: BalanceOfUnderlyingCompoundCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ChangeStateCall extends ethereum.Call {
  get inputs(): ChangeStateCall__Inputs {
    return new ChangeStateCall__Inputs(this);
  }

  get outputs(): ChangeStateCall__Outputs {
    return new ChangeStateCall__Outputs(this);
  }
}

export class ChangeStateCall__Inputs {
  _call: ChangeStateCall;

  constructor(call: ChangeStateCall) {
    this._call = call;
  }

  get _state(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class ChangeStateCall__Outputs {
  _call: ChangeStateCall;

  constructor(call: ChangeStateCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }

  get value1(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class ExchangeRateCompoundCall extends ethereum.Call {
  get inputs(): ExchangeRateCompoundCall__Inputs {
    return new ExchangeRateCompoundCall__Inputs(this);
  }

  get outputs(): ExchangeRateCompoundCall__Outputs {
    return new ExchangeRateCompoundCall__Outputs(this);
  }
}

export class ExchangeRateCompoundCall__Inputs {
  _call: ExchangeRateCompoundCall;

  constructor(call: ExchangeRateCompoundCall) {
    this._call = call;
  }
}

export class ExchangeRateCompoundCall__Outputs {
  _call: ExchangeRateCompoundCall;

  constructor(call: ExchangeRateCompoundCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class PerformUpkeepCall extends ethereum.Call {
  get inputs(): PerformUpkeepCall__Inputs {
    return new PerformUpkeepCall__Inputs(this);
  }

  get outputs(): PerformUpkeepCall__Outputs {
    return new PerformUpkeepCall__Outputs(this);
  }
}

export class PerformUpkeepCall__Inputs {
  _call: PerformUpkeepCall;

  constructor(call: PerformUpkeepCall) {
    this._call = call;
  }
}

export class PerformUpkeepCall__Outputs {
  _call: PerformUpkeepCall;

  constructor(call: PerformUpkeepCall) {
    this._call = call;
  }
}

export class PrizePoolCall extends ethereum.Call {
  get inputs(): PrizePoolCall__Inputs {
    return new PrizePoolCall__Inputs(this);
  }

  get outputs(): PrizePoolCall__Outputs {
    return new PrizePoolCall__Outputs(this);
  }
}

export class PrizePoolCall__Inputs {
  _call: PrizePoolCall;

  constructor(call: PrizePoolCall) {
    this._call = call;
  }
}

export class PrizePoolCall__Outputs {
  _call: PrizePoolCall;

  constructor(call: PrizePoolCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RawFulfillRandomWordsCall extends ethereum.Call {
  get inputs(): RawFulfillRandomWordsCall__Inputs {
    return new RawFulfillRandomWordsCall__Inputs(this);
  }

  get outputs(): RawFulfillRandomWordsCall__Outputs {
    return new RawFulfillRandomWordsCall__Outputs(this);
  }
}

export class RawFulfillRandomWordsCall__Inputs {
  _call: RawFulfillRandomWordsCall;

  constructor(call: RawFulfillRandomWordsCall) {
    this._call = call;
  }

  get requestId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get randomWords(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class RawFulfillRandomWordsCall__Outputs {
  _call: RawFulfillRandomWordsCall;

  constructor(call: RawFulfillRandomWordsCall) {
    this._call = call;
  }
}

export class RedeemCall extends ethereum.Call {
  get inputs(): RedeemCall__Inputs {
    return new RedeemCall__Inputs(this);
  }

  get outputs(): RedeemCall__Outputs {
    return new RedeemCall__Outputs(this);
  }
}

export class RedeemCall__Inputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }

  get _tokenAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RedeemCall__Outputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SupplyRatePerBlockCompoundCall extends ethereum.Call {
  get inputs(): SupplyRatePerBlockCompoundCall__Inputs {
    return new SupplyRatePerBlockCompoundCall__Inputs(this);
  }

  get outputs(): SupplyRatePerBlockCompoundCall__Outputs {
    return new SupplyRatePerBlockCompoundCall__Outputs(this);
  }
}

export class SupplyRatePerBlockCompoundCall__Inputs {
  _call: SupplyRatePerBlockCompoundCall;

  constructor(call: SupplyRatePerBlockCompoundCall) {
    this._call = call;
  }
}

export class SupplyRatePerBlockCompoundCall__Outputs {
  _call: SupplyRatePerBlockCompoundCall;

  constructor(call: SupplyRatePerBlockCompoundCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class TransferControllerRoleCall extends ethereum.Call {
  get inputs(): TransferControllerRoleCall__Inputs {
    return new TransferControllerRoleCall__Inputs(this);
  }

  get outputs(): TransferControllerRoleCall__Outputs {
    return new TransferControllerRoleCall__Outputs(this);
  }
}

export class TransferControllerRoleCall__Inputs {
  _call: TransferControllerRoleCall;

  constructor(call: TransferControllerRoleCall) {
    this._call = call;
  }

  get _newController(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferControllerRoleCall__Outputs {
  _call: TransferControllerRoleCall;

  constructor(call: TransferControllerRoleCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
