let str: string = 'Hello World!';
let boolFalse: boolean = false;
let boolTrue: boolean = true;
let str1: string = 'Hello World'
let multitypeVar: string | number = 'String'
multitypeVar = 20
class Human{
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