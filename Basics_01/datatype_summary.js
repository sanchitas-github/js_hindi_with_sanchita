//interview related
//primitive datatypes:
//7 categorise:string(call by value changes are apllied in copy not original),null(empty not 0,it is object),Number,Boolean,undefined(not defined),symbol(used for making value unique)
const score=100
const scorevalue=100.3
const isloggedin=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid);//false

const bignumber=3245678787487389n//bigint

//referrence type:non primitive=>refernce can be allocated directly from the memory to u.
//Array,Objects,Functions

const heros=["shaktiman","naagraj","doga"]//array
let myobj={//obj in curly brases
    name:"sanchita",
    age:19,

}
const myfunction=function(){
    console.log("hello world")
}

console.log(typeof bignumber)//bigint
console.log(typeof outsideTemp)//object
console.log(typeof myfunction)//function
console.log(typeof heros)//object
console.log(typeof anotherid)//symbol
//is javascript is dynamically or staticly typed language?
//JavaScript is a dynamically typed language, but TypeScript is a statically typed language. Longer answer: In dynamically typed languages all type checks are performed in a runtime, only when your program is executing