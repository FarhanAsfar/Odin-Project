function isOdd(num){
    return num%2 !==0;
}

const arr = [1,2,3,4,5];

const oddNum = arr.filter(isOdd);


console.log(arr);

console.log(oddNum);