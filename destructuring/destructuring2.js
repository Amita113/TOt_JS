const employee = {
    id: 1,
    name1: 'Aparajkar',
    age: 28,
    department: "Web Developer",
    address: {
        city: "pune",
        country: "India"
    },
    netSalary: { salary:
        {basicpay:1000000,pf:300000} }
}
    
//  we use destructuring  to get the nested object as well

const { name1, age, department, address: { country } } = employee;

console.log(` My name is ${name1} he is ${age} working in ${department} lives in ${country} whose salary is`)

const{netSalary:{salary:{basicpay}}} = employee;
console.log(`this is an employers ${basicpay}`)
