function outer(){
    
    let a= 20;
    function inner(){
        console.log(a);
          //inverse scope lexical scope does not work
        }
        a=30;
        inner();
    }
    outer(); 