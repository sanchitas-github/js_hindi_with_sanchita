const accountID=144533
let accountEmail="sdhfshg123@gmail.com";
accountCity="jaipur";
var accountpassword="12345";
let accountstate; //undefined because there is no value declared
//accountID=2;// not allowed used const so it is unchangeable,unredeclareable
/*do not use var preferabbly because of issues in functional scope and block scope var  */
/*const and let should be used*/
accountEmail="hc@hc.com";
accountpassword="212314654";
accountCity="bangaluru";
console.table([accountID,accountEmail,accountpassword,accountCity,accountstate])
console.log(accountID);
/*
output
┌─────────┬─────────────┐
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 144533      │
│ 1       │ 'hc@hc.com' │
│ 2       │ '212314654' │
│ 3       │ 'bangaluru' │
│ 4       │ undefined   │
└─────────┴─────────────┘
144533 
*/
