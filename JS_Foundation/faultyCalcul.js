/*generate random number between 0 to 1, if the random number is greater than 0.2l
perform wrong operation. */

function rightOperation(a, b){
    let plus = a+b;
    let minus = a-b;
    let multi = a*b;
    let divide = a/b;

    console.log('+: '+plus+'\n'+'-: '+minus+'\n'+'*: '+multi+'\n'+'/: '+divide);
}

function wrongOperation(a, b){
    let plus = a*b;
    let minus = a/b;
    let multi = a+b;
    let divide = a-b;

    console.log('+: '+plus+'\n'+'-: '+minus+'\n'+'*: '+multi+'\n'+'/: '+divide);
}


let a = 10;
let b = 5;
let rand = Math.random();
//console.log(rand);

if(rand>0.3){
    rightOperation(a,b);
}else{
    wrongOperation(a,b);
}