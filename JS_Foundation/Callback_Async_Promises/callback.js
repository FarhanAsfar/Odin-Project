function square(n){
  return n*n;
}

function cube(n){
  return n*n*n;
}

function sumOfNumbers(x, y, func){
  let a = func(x);
  let b = func(y);
  let result = a + b;

  return result;
}

let result = sumOfNumbers(2, 3, cube);
console.log(result);
