export default class Counter {
    constructor() {
        this.counter = 0;
    }
    add(val) {
        this.counter += val;
    }
    minus(val) {
        this.counter -= val;
    }
}