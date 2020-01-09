
function sample(a){
    return function(b){
        return function(c){
            return `Sum of a,b,c is ${a+b+c}`;
        }
    }
}

function sum(...n){
    
}

console.log(sample(1)(2)(3));
console.log(sum(1,2,3));