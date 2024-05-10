function onDone() {
  console.log("hello");
}

setTimeout(onDone, 2000);
console.log("after calling onDone");
