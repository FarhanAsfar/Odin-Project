const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);


const para = document.createElement('p');
para.classList.add('red');
para.textContent = 'This para is written using DOM!';
container.appendChild(para);

const redPara = document.querySelector('.red');
redPara.style.color = 'red';



const head = document.createElement('h3');
head.classList.add('heading');
head.textContent = `I'm a blue h3`;
container.appendChild(head);
const hBlue = document.querySelector('.heading');
hBlue.style.color = 'blue';



const newDiv = document.createElement('div');
newDiv.classList.add('elements');
const hDiv = document.createElement('h1');
const pDiv = document.createElement('p');
hDiv.textContent = `I'm in a div`;
pDiv.textContent = "ME TOO!";
newDiv.appendChild(hDiv);
newDiv.appendChild(pDiv);

container.appendChild(newDiv);
