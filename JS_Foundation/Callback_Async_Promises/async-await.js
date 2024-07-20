//----------------Callback Syntax--------------------------//
function myAsycnFunction(callback) {
    callback("hello");
  }
  
  function main() {
      myAsycnFunction(function(value){
        console.log(value);
      }); 
  }
  
  main();
//-----------------------------------------------------------------//


//----------------Promise Syntax-----------------------------------//

function myAsycnFunction() {
    let p = new Promise(function (resolve) {
      resolve("hello");
    });
    return p;
  }
  
  function main() {
      myAsycnFunction().then(function(value){
        console.log(value);
      }); 
  }
  main();
//------------------------------------------------------------------------//


//-------------------------Async-Await Syntax-----------------------------//
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
