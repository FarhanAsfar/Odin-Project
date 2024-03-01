const link = document.querySelector('a');

link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org"; //change the url link

const section = document.querySelector('section');
const content = document.createElement('a'); //add new anchor tag.
content.textContent = "JavaScript";
content.href = "https://javascript.info";
section.appendChild(content);

const para = document.createElement('p'); //create new paragraph
para.textContent = "MDN web docs";
section.appendChild(para);


const text = document.createTextNode("web dev knowledge");
const linkPara = document.querySelector('p');
linkPara.appendChild(text);

// section.appendChild(linkPara); //move para to the bottom.

// section.removeChild(linkPara); 
linkPara.remove(); //delete the node
