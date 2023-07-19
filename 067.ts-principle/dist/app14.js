class Counter {
    count;
    setCount(count) {
        this.count = count;
    }
    increment() {
        this.count += 1;
        return this.count;
    }
    decrement() {
        this.count -= 1;
        return this.count;
    }
}
const counter = new Counter();
counter.setCount(6);
console.log(counter.increment());
console.log(counter.decrement());
