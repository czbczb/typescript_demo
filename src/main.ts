class Person {
    chirping: string;
    constructor(message: string) {
        this.chirping = message;
    }
    chirp() {
        return this.chirping;
    }
}
let child = new Person('hello world');
console.log(child.chirp());