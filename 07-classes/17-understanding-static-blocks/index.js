/*
 * Understanding Static Blocks
 */
function loadInitialCount() {
    return 10;
}
class Counter {
    static increment() {
        Counter.count++;
    }
}
Counter.count = 0;
//* Static block executes at the time of 'Initialization' of the class.
(() => {
    console.log("Initializing Counter class");
    Counter.count = loadInitialCount();
})();
console.log(Counter.count);
Counter.increment();
console.log(Counter.count);
const counter = new Counter();
export {};
