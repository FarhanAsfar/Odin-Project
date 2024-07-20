// function onDone() {
//   console.log("hello");
// }

// setTimeout(onDone, 2000);
// console.log("after calling onDone");

function findSum(n){
  let ans = 0;
  for(let i=0;i<n;i++){
    ans+=i;
  }
  return ans;
}

function findSumTill100(){
  console.log(findSum(20));
}

setTimeout(findSumTill100, 1000);

console.log("hello");

//-----------------------------------------------------------------------//

console.log("hi");

setTimeout(()=>{
  console.log("async 1")
}, 20000);

setTimeout(()=>{
  console.log("async 2")
}, 10000);

let a=0;
for(let i=0; i<10; i++){
  a+=i;
}
console.log(a);

