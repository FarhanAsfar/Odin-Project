function addOne(num){
    return num+1;
}

const arr = [1,2,3,4,5];
const mappedArr = arr.map(addOne);

//map returns a new array and does not change the original array.
console.log(arr);
console.log(mappedArr);