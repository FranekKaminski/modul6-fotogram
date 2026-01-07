const button = document.getElementById("mybutton");

button.addEventListener("click", doSomething);

function doSomething(){
    alert("Hello World");
}


document.addEventListener('keydown', (event) => {
    console.log(event.key);
});