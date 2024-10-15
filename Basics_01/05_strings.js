//string is denoted with singel and double quotes.
//outdated format for representing string is given below

const name="sanchita"
const repoCount=50
console.log(name+repoCount+"value");//sanchita50value


//updated way to represent string is :
console.log(`hello my name is ${name} and my repcount is ${repoCount}`)
//hello my name is sanchita and my repcount is 50
const gamename= new String('sanchitasharma')
console.log(gamename[0]);
console.log(gamename.__proto__)
console.log(gamename.length);
console.log(gamename.toUpperCase())
console.log(gamename.charAt('2'));
console.log(gamename.indexOf('t'))
/*
s
{}
14
SANCHITASHARMA
n
6
*/

const newstring=gamename.substring(0,4)
console.log(newstring)//sanc

const anotherstring=gamename.slice(-2,2)
console.log(anotherstring)

const newstring1="   sanchita    "
console.log(newstring1);//   sanchita  
console.log(newstring1.trim())//sanchita


const url="https://sanchita.com/sanchita%20sharma"
console.log(url.replace('%20','-'))//https://sanchita.com/sanchita-sharma
console.log(url.includes('sundar'))//false
console.log(url.includes('sanchita'))//true

console.log(gamename.split)//[Function: split]
console.log(gamename.split('-'))//[ 'sanchitasharma' ]