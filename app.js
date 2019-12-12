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
var sayi = 10;
sayi = 10.4;
var sehir = 'İstanbul';
var sayilar = [10, 15]; //array
var sayilar2 = [10, 15]; //generic
var dizi = [2, 'ankara']; //tuple
var Renk;
(function (Renk) {
    Renk[Renk["kirmizi"] = 0] = "kirmizi";
    Renk[Renk["siyah"] = 1] = "siyah";
    Renk[Renk["sari"] = 2] = "sari";
    Renk[Renk["mavi"] = 3] = "mavi";
})(Renk || (Renk = {})); //enum
var renk = Renk.kirmizi;
//any, veri tipi belli olmadığı durumlarda kullanılır
var deger = 'ankara';
deger = 2;
deger = true;
deger = {}; //obje demektir.
var deger2 = undefined;
function selamver() {
    console.log('hi');
    // return 5 diyemeyiz
}
var yas; //deger atanmayınca undefined olur.
function topla(x, y) {
    return x + y;
}
console.log(topla(1, 2));
function davet(ilkdavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkdavetli + " " + digerleri.join(" ");
}
console.log(davet("ayşe", "salih"));
var Ev = /** @class */ (function () {
    function Ev(odasayisi, katsayisi, penceresayisi) {
        this._odasayisi = odasayisi;
        this._katsayisi = katsayisi;
        this._penceresayisi = penceresayisi;
    }
    return Ev;
}());
var ev = new Ev(1, 2, 3);
console.log(ev._odasayisi);
