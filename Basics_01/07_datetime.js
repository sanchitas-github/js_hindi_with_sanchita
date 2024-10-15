/*?Javascript Date object:represent a single moment in  time in a platform independent  format .
 date objects encapsultes an integral number that represents 
milloinseconda since the midnight at the begining  of jan 1,1970,utc(the epoch) Date->millieseconds 
Note: Tc39 is working on temporal ,a new date/time api.
*/
//Dates 
let mydate=new Date()
console.log(mydate)//2024-10-15T07:28:04.184Z
console.log(mydate.toString()); //Tue Oct 15 2024 07:29:37 GMT+0000 (Coordinated Universal Time)
console.log((mydate.toDateString()));//Tue Oct 15 2024
console.log(mydate.toLocaleDateString())//10/15/2024
console.log(typeof mydate)//object


let mycreateddate=new Date(2024,0,15)
console.log(mycreateddate.toDateString()) //Mon Jan 15 2024
console.log(mycreateddate.toLocaleDateString())// 1/15/2024

let mycreateddate1=new Date(2024,0,15,5,3,56,32) //  1/15/2024, 5:03:56 AM
console.log(mycreateddate1.toLocaleString())// 1/15/2024, 5:03:00 AM

 let mycreateddate2=new Date("2023-01-14") // 1/14/2023, 12:00:00 AM
 console.log(mycreateddate2.toLocaleString());//agr dd/mm/yy hai toh humara moth 1 se start hoga 0 se nahi

 let mycreateddate3=new Date("01-14-24")
 console.log(mycreateddate3.toLocaleString()); // 1/14/2024, 12:00:00 AM

 //+++++++++TIMESTAMP++++++++++//
 let mytimestamp=Date.now()
 console.log(mytimestamp)//1728980347673  millieseconds value is diplayed
 console.log(mycreateddate.getTime());//it will give 2 values in milliseconds //1705276800000

 console.log(Date.now()/1000)
 console.log(Math.floor(Date.now()/1000))
  //1728980569.972
//1728980569
 

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);
console.log(newDate.getTime());
console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}` )




