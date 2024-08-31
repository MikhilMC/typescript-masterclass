/*
 * Static Members
 */
/*
 * Static properties and methods which are only available to the class itself.
 * They can not be accessed using the objects or the instances of the class.
 */
class Counter {
    static increment() {
        Counter.count++;
    }
}
Counter.count = 0;
console.log(Counter.count);
Counter.increment();
console.log(Counter.count);
const counter = new Counter();
export {};
