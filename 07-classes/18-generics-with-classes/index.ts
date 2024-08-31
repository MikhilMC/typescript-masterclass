/*
 * Generics With Classes
 */

class Box {
  private _value: any;

  constructor(value: any) {
    this._value = value;
  }

  public get value() {
    return this._value;
  }

  public set value(newValue: any) {
    this._value = newValue;
  }
}

const numberBox = new Box(123);

class Box2<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  public get value(): T {
    return this._value;
  }

  public set value(newValue: T) {
    this._value = newValue;
  }
}

const numberBox2 = new Box2(123);
//! Type 'string' is not assignable to type 'number'.
//* numberBox2.value = "string";

const stringBox = new Box2<string>("hello");

export {};
