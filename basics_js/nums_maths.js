const score = 400;

const balance = new Number(100);
//console.log(score);
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const hundred = 100000
//console.log(hundred.toLocaleString(`en-IN`));



/********************************Math**************************************/

/*console.log(Math.abs(4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(1,5,75,9));
console.log(Math.max(78,3,70,88));*/

console.log(Math.random())
console.log(Math.floor(Math.random() * 10) + 1);  //it will random value bitween 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);