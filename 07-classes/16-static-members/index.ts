/*
 * Static Members
 */

/*
 * Static properties and methods which are only available to the class itself.
 * They can not be accessed using the objects or the instances of the class.
 */
class Counter {
  static count = 0;

  static increment() {
    Counter.count++;
  }
}

console.log(Counter.count);
Counter.increment();
console.log(Counter.count);

const counter: Counter = new Counter();
//! Property 'count' does not exist on type 'Counter'.
//! Did you mean to access the static member 'Counter.count' instead?
//* console.log(counter.count);

export {};
