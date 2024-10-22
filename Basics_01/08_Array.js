//array-Square brackets ,Resizable,mixed datatypes.
//ex:const myarr=[0.1.2.3.4.5.6,"sanchita"]
//arrays are associstive and cannont be accessed by arbitary strings as indexes,
//1st element-0,2nd-1,3rd-2
//arrays copy operation create shallow copies-share same referrence point and deep copies -Do not share same referrence

//const myarr=[0,1,2,3,4,5]
//console.log(myarr[0]);//basic

const myarr=[0,1,2,3,4,5]
const myheroes=["shaktimaan","naagraj","batman"]
const myarr2= new Array(1,2,3,4)
console.log(myarr[1]);//1
//Array methods

myarr.push(6)
myarr.push(7)
console.log(myarr);
/*[
    0, 1, 2, 3,
    4, 5, 6
  ]
    [
  0, 1, 2, 3,
  4, 5, 6, 7
]*/

myarr.pop()
console.log(myarr)
//[
    0, 1, 2, 3,
    4, 5, 6
  //]

  myarr.unshift(9)
  console.log(myarr);
  /*[
  9, 0, 1, 2,
  3, 4, 5, 6
]*/
myarr.shift()
console.log(myarr)


console.log(myarr.includes(9))//false
console.log (myarr.indexOf(9))//-1


const newArr=myarr.join()
console.log(myarr);//[0,1,2,3,4,5,6]
console.log(typeof newArr)//string
console.log(newArr);//0,1,2,3,4,5,6

//slice
console.log("A",myarr);
const myn1=myarr.slice(1,3)//copy of array ko manipulate krta hai not real array
console.log(myn1);
console.log("B",myarr);
const myn2=myarr.splice(1,3)//original array ko manipulate krega 
console.log(myn2);

//Array functions


const marvel=["thor","ironman","spiderman"]
const dc=["superman","batman","flash"]
//marvel.push(dc)
//console.log(marvel)//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
//console.log(marvel[3][1]);//batman

const allmarvel=marvel.concat(dc)
console.log(allmarvel);//[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

const allnewhero=[...marvel, ...dc]
console.log(allnewhero);//[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

const another_array=[1,2,3,[4,5,6],7,[6,5,7,[4,5]]]
const realanotherarray=another_array.flat(Infinity)
console.log(realanotherarray)//[
    1, 2, 3, 4, 5,
    6, 7, 6, 5, 7,
    4, 5
  //]

  console.log(Array.isArray("hitesh"))
  console.log(Array.from("hitesh"))
  console.log(Array.from({name:"hitseh"}))
//false
//[ 'h', 'i', 't', 'e', 's', 'h' ]
//[]

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]







