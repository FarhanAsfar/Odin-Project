const arr = [1,2,3,4,5];

const productOfAllNum = arr.reduce((total, currentItem)=>{
    return total*currentItem;
}, 1);

console.log(productOfAllNum);
console.log(arr);