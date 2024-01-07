var a = 5;
var b = 20;
var c = 'copilot';

console.log(a+b+c); //output: 25copilot.

console.log(typeof a, typeof b, typeof c); // would pring the data type.


const value = 200; //const value can't be changed, not allowed.

function testVarLet(){
    console.log(x); //undefined
    //console.log(y); //ReferenceError

    var x = 10;
    let y = 20;


    if(true){
        var x = 40; //var redeclares and modifies the 'x'

        let y = 50; //it creates a new 'y' only in this block

        console.log(x); //40
        console.log(y); //50
    }

    console.log(x); //40
    console.log(y); //20
}

testVarLet();
