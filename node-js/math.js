function add(a, b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

//module.exports = add; //making the add function public

module.exports = {
    add,
    subtract,
};