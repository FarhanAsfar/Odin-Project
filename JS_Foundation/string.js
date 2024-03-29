let text = 'apple, banana, kkx';
let part = text.substring(7,13); 

let part1 = text.substring(7);
let part2 = text.substring(-4);

let newText = text.replace("apple", "pineapple") //only replaces the first match.


console.log(newText);
console.log(part2);


let text2 = "windows, linux, mac, windows";
let newText2 = text2.replace(/windows/g, "win7"); //to replace all the matches
console.log(newText2);


let text3 = "hello world";
let text4 = text3.toUpperCase(); //convert string to upper case

let text5 = "hello ubuntu";
let text6 = text5.toLowerCase();  //convert string to lower case

console.log(text4);
console.log(text6);


//concat string
let string1 = "java";
let string2 = "Script";
let newString = string1.concat("",string2);
console.log(newString);


//string trim
let string3 = "    hello world      ";
let string4 = string3.trimStart();
let string5 = string3.trimEnd();
let string6 = string3.trim();
console.log(string4+"\n"+string5+"\n"+string6);


//string pad
let number = '5';
let padd = number.padStart(4,"0"); //pad string to another string until reaches given length.
console.log(padd);

let num1 = 5; //number, convert it to string before using pad method
let num = num1.toString();
let paddEnd = num.padEnd(4, "*");
let paddStart = num.padStart(4, "*");
console.log(paddStart);
console.log(paddEnd);

//template literal
let name = 'FAR';
let address = 'Khilgaon';
console.log(`Student name is ${name} and address is ${address}`);

//String Slice
let s1 = 'blockchain';
console.log(s1.slice(5,10)); //5th index will not be included but 10th index will be included.

//replace
console.log(s1.replace('block', 'gold')); //only the first occurence of 'block' will be changed.

//concat
console.log(s1.concat(' is the future'));