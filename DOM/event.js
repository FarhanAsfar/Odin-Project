const btn = document.querySelector('#btn');
//btn.onclick = () => alert('Hello! Learning DOM!'); //arrow function. Method 2.

function alertFunction(){
    alert("Keep learning!");
}
btn.addEventListener('click', alertFunction); //try using function.

// btn.addEventListener('click', () => {
//     alert("Hello World!");
// });

// btn.addEventListener('click', function(e){
//     e.target.style.background = 'blue'
// });



const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert('Button '+button.id+' is pressed');
    });
});