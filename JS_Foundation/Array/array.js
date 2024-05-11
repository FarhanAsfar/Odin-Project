let sum = 0;
function sumOfTripledEvens(arr){
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            sum += arr[i]*3;   
        }
    }
    return sum;
}

let arr = [1,2,3,4,5];

let result = sumOfTripledEvens(arr);
console.log(result);