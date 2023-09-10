
//object one
let first = {
    name: "ABC",
    article: "C++"
}

function printVal() {
    console.log(this.name + " contributes about " + 
                this.article + "<br>");
}

let printFunc2 = printVal.bind(first);
//using bind()
// bind() takes the object "first" as parameter//
printFunc2();

/* 
We use the Bind() method to call a function with this value, this keyword refers to the same object which is currently selected
*/