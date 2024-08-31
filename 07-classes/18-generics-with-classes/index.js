/*
 * Generics With Classes
 */
class Box {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        this._value = newValue;
    }
}
const numberBox = new Box(123);
class Box2 {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        this._value = newValue;
    }
}
const numberBox2 = new Box2(123);
//! Type 'string' is not assignable to type 'number'.
//* numberBox2.value = "string";
const stringBox = new Box2("hello");
export {};
