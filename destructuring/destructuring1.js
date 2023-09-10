// destructuring in javascript is which unpacks the values from array and properties of objects in to distinct variables.

const data ={
    name:"sachin",
    age:48,
    profession:"cricketer"
}
//es5
console.log(`My name is ${data.name}`)
console.log(`My age is ${data.age}`)
console.log(`I play  ${data.profession}`)

//instead of this we will use object destructuring
// here we created distinct variables and it can directly get the values form object.
let {name,age,profession} = data
console.log(` My name is ${name} My age is ${age} I   play  ${profession}`)

// so the distinct varaibles should be same. else it gives undefined error

// we can use other way of destructuring to store in new variables
let {name:myName,age:myAge,profession:myProf} =data
console.log(` My name is ${myName} My age is ${myAge} I   play  ${myProf}`)
