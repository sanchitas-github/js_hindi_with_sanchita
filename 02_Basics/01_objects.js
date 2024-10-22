//singleton-jb bhi hum actually mai literals ki tarah declare krte hai toh wo singleton nhi hota hai 
//but agr constructor se declare krte hai toh wo singleton hota hai..

//object literals

const mysym=Symbol("key1")
const jsuser={
    name:"Sanchita",
    "full name":"sanchita sharma",
    [mysym]:"mysym1",
    age:18,
    email:"sanchita@google.com",
    isloggedin:false,
    lastloggindays:["monday","saturday"]

}

jsuser.email;
console.log(jsuser.age);
console.log(jsuser["email"])
console.log(jsuser["full name"]);
console.log(jsuser[mysym]);

jsuser.email="sanchita@chatgpt"
//Object.freeze(jsuser)
jsuser.email="sanchita@instagram.com"
console.log(jsuser.email)
console.log(jsuser);

/*
{
  name: 'Sanchita',
  'full name': 'sanchita sharma',
  age: 18,
  email: 'sanchita@chatgpt',
  isloggedin: false,
  lastloggindays: [ 'monday', 'saturday' ],
  [Symbol(key1)]: 'mysym1'
}*/
 
jsuser.greeting=function(){
    console.log("hello js user")
}
jsuser.greeting2=function(){
    console.log(`heloo js user,${this.name}`);
    
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());


