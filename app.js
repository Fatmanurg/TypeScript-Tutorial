"use strict";
var str = 'Hello World!';
var boolFalse = false;
var boolTrue = true;
var str1 = 'Hello World';
var multitypeVar = 'String';
multitypeVar = 20;
var Human = /** @class */ (function () {
    function Human(data) {
        this.name = data;
    }
    return Human;
}());
var human = new Human('Gabriel');
if (human instanceof Human) {
    console.log(human.name + " is a human");
}
var str2 = 'I am a String';
var strLength = str.length;
var strings = ['Hello', 'World', '!'];
var numbers = [1, 2, 3, 4, 5];
var stringsAndNumbers = ['Age', 20];
var exampleTuple = [20, 'https://google.com'];
var humans = {
    firstName: 'Frank',
    age: 32,
    height: 185,
    greet: function () {
        console.log("Greetings stranger!");
    }
};
function add(num1, num2) {
    return num1 + num2;
}
function printName(firstName, lastName) {
    if (lastName)
        console.log("Firstname: " + firstName + ", Lastname: " + lastName);
    else
        console.log("Firstname: " + firstName);
}
printName('Gabriel', 'Tanner');
printName('Gabriel');
function printName1(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Tanner'; }
    console.log("Firstname: " + firstName + ", Lastname: " + lastName);
}
var person = { name: 'Gabriel' };
function dummyFun(arg) {
    return arg;
}
