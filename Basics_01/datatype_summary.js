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

/**************stack and heap memory***********************/
//stack memory(primitive datatypes use stack memory)
//heap memory(non primitive datatypes use heap memory)
let myyoutubename="sanchitasharma" //get stored in stack memory
let anothername=myyoutubename
anothername="captainmarvel"
console.log(myyoutubename)//sanchitasharma
console.log(anothername);//captainmarvel
//copy of the value is changed not original one is changed in stack

let user1={
    email:"user@google.com",
    upi:"user@ybl"
}
let user2=user1
user2.email="annaya@google.com"
console.log(user1.email)//annaya@google.com
console.log(user1.email)//annaya@google.com
//stack ke ander  jo bhi cheez lenge uska ek copy milta hai actual value change nhi hota hai.
//agr aap heap ke ander kuch value rakhte hai toh uska reference milta hai,mtlb jo bhi changes hoti hai wo actual data pr hoti hai.not on copy