let text = 'apple, banana, kkx';
let part = text.substring(7,13); 

console.log(part);

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

console.log(text5);
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
let padd = number.padEnd(4,"0"); //pad string to another string until reaches given length.
console.log(padd);

let num1 = 5; //number, convert it into string before using 'pad' method
let num = num1.toString();
let padded = num.padStart(4, "*");
console.log(padded);

