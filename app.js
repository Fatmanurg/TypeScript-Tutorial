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
