let str: string = 'Hello World!';
let boolFalse: boolean = false;
let boolTrue: boolean = true;
let str1: string = 'Hello World'
let multitypeVar: string | number = 'String'
multitypeVar = 20
class Human{  //class bir referans tiptir(new)
    name: string;
    constructor(data: string) {
     this.name = data;
    }
   }
   let human = new Human('Gabriel')
   if(human instanceof Human){
    console.log(`${human.name} is a human`)
   }
   let str2: any = 'I am a String'
let strLength = (str as string).length

let strings: string[] = ['Hello', 'World', '!']
let numbers: Array<number> = [1, 2, 3, 4, 5]
let stringsAndNumbers: (string | number)[] = ['Age', 20]
let exampleTuple: [number, string] = [20, 'https://google.com'];
const humans = {
    firstName: 'Frank',
    age: 32,
    height: 185,
    greet: function(){
     console.log("Greetings stranger!")
    }
   };
   type Humans = {firstName: string, age: number, height: number}
   
   function add(num1: number, num2: number): number {
    return num1 + num2
   }
   function printName(firstName: string, lastName?: string) {
    if (lastName) 
     console.log(`Firstname: ${firstName}, Lastname: ${lastName}`);
    else console.log(`Firstname: ${firstName}`);
    }
    printName('Gabriel', 'Tanner')
printName('Gabriel')
function printName1(firstName: string, lastName: string = 'Tanner') {
    console.log(`Firstname: ${firstName}, Lastname: ${lastName}`);
   }

   interface Person{
    name: string
   }
   const person: Person = {name: 'Gabriel'}
   function dummyFun(arg: any): any {
    return arg;
   }

   let sayi :number=10
   sayi=10.4
   let sehir:string='İstanbul'
   let sayilar:number[]=[10,15] //array
   let sayilar2: Array<number>=[10,15] //generic
   let dizi:[number,string]=[2,'ankara'] //tuple

   enum Renk{kirmizi,siyah,sari,mavi} //enum
   let renk:Renk=Renk.kirmizi

    //any, veri tipi belli olmadığı durumlarda kullanılır
    let deger:any='ankara'
    deger=2
    deger=true
    deger={} //obje demektir.

    let deger2:void=undefined
    function selamver():void{
        console.log('hi')
       // return 5 diyemeyiz
    }
    let yas:number //deger atanmayınca undefined olur.

    function topla(x:number,y:number):number{
        return x+y
    }
console.log(topla(1,2))

function davet(ilkdavetli:string,...digerleri:string[]):string{ //rest parameter
    return ilkdavetli+" "+digerleri.join(" ")
}
 console.log(davet("ayşe","salih"))
 class Ev{
    _odasayisi:number;
    _katsayisi:number;
    _penceresayisi:number;
    constructor(odasayisi:number,katsayisi:number,penceresayisi:number){
        this._odasayisi=odasayisi;
        this._katsayisi=katsayisi;
        this._penceresayisi=penceresayisi;
    }
    
    
    }
    let ev=new Ev(1,2,3);
    console.log(ev._odasayisi)