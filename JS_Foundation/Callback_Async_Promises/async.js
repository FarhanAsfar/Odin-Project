// function onDone() {
//   console.log("hello");
// }

// setTimeout(onDone, 2000);
// console.log("after calling onDone");

function findSum(){
  let ans = 0;
  for(let i=0;i<10;i++){
    ans+=i;
  }
  return ans;
}

function findSumTill100(){
  console.log(findSum(10));
}

setTimeout(findSumTill100, 1000);

console.log("hello");

