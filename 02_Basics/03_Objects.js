//destructuring of  objects

const course={
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"sanchita"
}
console.log(course.courseinstructor)

const{courseinstructor}=course
console.log(courseinstructor)

const{courseinstructor:instructor}=course
console.log(instructor)

const navbar=(company)=>{

}
navbar(company="sanchita")

//API'S

//json
//{
  //  "name":"sanchita",
  //  "coursename":"js in hindi",
  // " price":"Free"

//} //only for example for json actually no error in this 

[
    {},
    {},
    {}
];

//randomuser.me API