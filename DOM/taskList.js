const list = document.querySelector('ul');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    const myList = input.value;
    input.value = '';

    const taskList = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn  = document.createElement('button');

    taskList.appendChild(listText);
    listText.textContent = myList;

    taskList.appendChild(listBtn);
    listBtn.textContent = 'delete';

    list.appendChild(taskList);

    listBtn.addEventListener('click', ()=>{
        taskList.remove();
    });

    input.focus();
});