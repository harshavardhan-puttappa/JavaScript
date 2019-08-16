// let arr=[5,6,7,8,9];
// let mySet = new Set(arr);

// mySet.add('100');
// console.log(mySet);
// mySet.delete(7);
// console.log(mySet);
// mySet.forEach(function(x){
//     console.log(x);
// })

// let myMap=new Map([['a','hello'],['b','harsha']]);

// myMap.set('c','aarush');
// console.log(myMap);
// myMap.delete('a');
// console.log(myMap);

let carWeakSet= new WeakSet();

let car1= {
    make: 'maruthi', 
    model: 'swift'
};
carWeakSet.add(car1);

let car2= {
    make: 'hyundai',
     model: 'i10'
};
carWeakSet.add(car2);
console.log(carWeakSet);

let carMap=new WeakMap();

let k1={id: 1};
let k2={id:2};

carMap.set(k1,car1);
console.log(carMap);