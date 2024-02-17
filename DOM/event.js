const btn = document.querySelector('#btn');
//btn.onclick = () => alert('Hello! Learning DOM!'); //arrow function. Method 2.

function alertFunction(){
    alert("Keep learning!");
}
btn.addEventListener('click', alertFunction);

// btn.addEventListener('click', () => {
//     alert("Hello World!");
// });