function addOne(num){
    return num+1;
}

function isOdd(num){
    return num%2 !==0;
}

const arr = [1,2,3,4,5];
const mappedArr = arr.map(addOne);

const oddNum = arr.filter(isOdd);

//map returns a new array and does not change the original array.
console.log(arr);
console.log(mappedArr);
console.log(oddNum);