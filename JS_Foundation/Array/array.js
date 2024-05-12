let sum = 0;
function sumOfTripledEvens(arr){
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            sum += arr[i]*3;   
        }
    }
    return sum;
}

//using map,filter, and reduce method

function sumOfTripledEvensNew(arr){
    return arr
    .map((num)=> num*3)
    .filter((num)=> num%2 ===0)
    .reduce((acc, curr)=> acc+curr);
}
let arr = [1,2,3,4,5];

let result = sumOfTripledEvensNew(arr);
console.log(result);