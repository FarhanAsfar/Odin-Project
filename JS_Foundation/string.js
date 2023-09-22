let text = 'apple, banana, kkx';
let part = text.substring(7,13); 

let part1 = text.substring(7);
let part2 = text.substring(-4);

let newText = text.replace("apple", "pineapple") //only replaces the first match.


console.log(newText);
console.log(part2);