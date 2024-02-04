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

