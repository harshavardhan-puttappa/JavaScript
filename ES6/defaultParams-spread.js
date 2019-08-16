//Default Parameters
function greet(greeting='Good afternoon'){
    console.log(greeting);
}

greet();


//spread Operator(...)
var x=[4];
var y=[5,6];

function display(){
    console.log(y+','+x);
}

//display.apply(y);

display(...y,...x);
