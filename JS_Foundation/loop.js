console.log("hello");

for (let i = 0; i < 10; i++) {
    console.log(i+1);   
}

let identity = {
    name: 'farhan',
    id: 154,
    dept: 'cse'
}

for (const key in identity) { //for-in loop
        const element = identity[key];
        console.log(key+':'+element);
}
