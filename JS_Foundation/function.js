function greet(name) {
    console.log("hello "+name);
}

greet('world');
greet('JavaScript');

function arraySum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
let nums = [1,2,4,5];
let result = arraySum(nums);
console.log(result);


//arrow function

let sum = (a,b) =>a+b;
//sum -> function name
//(a,b) -> arguments
//(a+b) -> expression
console.log(sum(2,3));


let age = 23;
let welcome = (age<20)?
() => console.log("Hello!"):
() => console.log("Greetings!");

welcome();
