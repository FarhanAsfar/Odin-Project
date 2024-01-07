let a = 5;
let b = 4;
let c = '5';

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b); //exponential operator
console.log(a%b);


if(a>b){
    console.log("a is larger");
}
else{
    console.log("b is larger");
}


if(a == c){  // '==' will only check the values, it won't check the data type
    console.log(a, c);
    console.log(typeof a, typeof c);
}


if(a === c){  // '===' will check the data type when comparing variables
    console.log(a, c); 
    console.log(typeof a, typeof c);
}else{
    console.log('false ' +a +' is not equal to '+ c);
}