console.log("hello");

for (let i = 0; i < 10; i++) {
    console.log(i+1);   
}

let identity = {
    name: 'farhan',
    id: 154,
    dept: 'cse'
}

for (const key in identity) { //for-in loop (loops through an object)
        const element = identity[key];
        console.log(key+':'+element);
}

for (const iterator of 'farhan') { //for-of loop
    console.log(iterator);
}

let i = 5;
while (i<=10) {
    console.log(i*10);
    i++;
}

