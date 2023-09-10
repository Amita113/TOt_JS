// array destructuring
const arr1=[10,202,30,40]
//es5
// num1=arr1[0]
// num2=arr1[1]
// num3=arr1[2]
//es6
const [num1,num2,num3,num4]=arr1
console.log(num1);

const progLanguage=['JS','Html','Css','React','MERN']
var topic1 = progLanguage[0]
var topic2 = progLanguage[1]
var topic3 = progLanguage[2]
var topic4 = progLanguage[3]
var topic5 = progLanguage[4]

console.log(" My favourite Programming language is "+topic1)

//but in es6 array destructuring

let [top1,top2,top3,top4,top5] = progLanguage
console.log(" My favourite Programming language is "+top1)
//if we want ot extract only first nd last element simply place ,
let [t1,,,,t5]=progLanguage
console.log(`my fav prog lang is ${t1} and second fav is ${t5}`)


//rest

let arr = [10,20,30,40,50,60]
let [a,b,c,...rest]= arr
console.log(a,b,c,rest)

// //similarly we can destructure objects

// let {p,q} ={p:10,q:20}
// console.log(p,q)