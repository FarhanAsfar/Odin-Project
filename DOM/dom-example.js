const link = document.querySelector('a');

link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org"; //changing the url link

const section = document.querySelector('section');
const content = document.createElement('a'); //adding new anchor tag.
content.textContent = "JavaScript";
content.href = "https://javascript.info";
section.appendChild(content);

const para = document.createElement('p');
para.textContent = "MDN web docs";
section.appendChild(para);
