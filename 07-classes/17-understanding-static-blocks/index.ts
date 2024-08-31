/*
 * Understanding Static Blocks
 */

function loadInitialCount(): number {
  return 10;
}

class Counter {
  static count = 0;

  static increment() {
    Counter.count++;
  }

  //* Static block executes at the time of 'Initialization' of the class.
  static {
    console.log("Initializing Counter class");
    Counter.count = loadInitialCount();
  }
}

console.log(Counter.count);
Counter.increment();
console.log(Counter.count);

const counter: Counter = new Counter();

export {};
