function myAsycnFunction() {
  let p = new Promise(function (resolve) {
    resolve("hello");
  });
  return p;
}

async function main() {
    let value = await myAsycnFunction(); //no callback syntax, no '.then' syntax 
    console.log(value);
}


main();
