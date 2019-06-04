var Person = /** @class */ (function () {
    function Person(message) {
        this.chirping = message;
    }
    Person.prototype.chirp = function () {
        return this.chirping;
    };
    return Person;
}());
var child = new Person('hello world');
console.log(child.chirp());
//# sourceMappingURL=main.js.map