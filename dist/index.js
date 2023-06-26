"use strict";
let num = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "Hello";
x = true;
let ids = [1, 2, 3, 4, 5];
ids.push(6);
let person = [1, "temp", true];
let employee;
employee = [
    [101, 'John'], [102, 'Jane']
];
let pid;
pid = '22';
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 2] = "Up";
    Direction1[Direction1["Down"] = 3] = "Down";
    Direction1[Direction1["Left"] = 4] = "Left";
    Direction1[Direction1["Right"] = 5] = "Right";
})(Direction1 || (Direction1 = {}));
console.log('Direction', Direction1.Up);
const user = {
    id: 1,
    name: 'John',
};
let cid = 1;
let customised = cid;
let CustomerID = cid;
function addNum(x, y) {
    return x + y;
}
console.log("Addition", addNum(1, 2));
function log(message) {
    console.log(`Message:${message}`);
}
log("hello");
log(123);
const user1 = {
    id: 1,
    name: "John"
};
console.log("Name:", user1.name);
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(7, 9));
class Person {
    constructor(pid, name) {
        this.name = name;
        this.pid = pid;
        console.log("Constructor called");
    }
    register() {
        return `${this.name} is registered`;
    }
}
const temp = new Person(12, "Vishal");
console.log(temp);
temp.pid = 9;
console.log(temp);
console.log(temp.register());
class Student {
    Register() {
        return "Hello";
    }
    constructor(pid, name) {
        this.name = name;
        this.Rollno = pid;
        console.log("Constructor called");
    }
}
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([12, 2, 4, 5]);
console.log(numArray);
