document.addEventListener("DOMContentLoaded", () => {
    let submitEl = document.getElementById("submitBtn");
    let nameEl = document.getElementById("namebtn");
    let openbyeEl = document.getElementById("byeBtn");
    let openhelloEl = document.getElementById("helloBtn")
    let opensecretEl = document.getElementById("secretBtn")
    
    if (submitEl) submitEl.addEventListener("click", changeColors);
    if (inputfirstEl) inputfirstEl.addEventListener("input", changeText);
    if (inputlastEl) inputlastEl.addEventListener("input", changeText);
    if (scrollEl) scrollEl.addEventListener("change", changeTextTag);
    if (nameEl) nameEl.addEventListener("click", helloPerson);
    if (openbyeEl) {
        openbyeEl.addEventListener("click", openSite);
        
    let maxX = window.innerWidth - openbyeEl.offsetWidth;
    let maxY = window.innerHeight - openbyeEl.offsetHeight;

    let randomX = Math.floor(Math.random() * maxX)
    let randomY = Math.floor(Math.random() * maxY)

    openbyeEl.style.left = randomX + "px";
    openbyeEl.style.top = randomY + "px"    

    }
    if (openhelloEl) {
        openhelloEl.addEventListener("click", openSite)

    let maxX = window.innerWidth - openhelloEl.offsetWidth;
    let maxY = window.innerHeight - openhelloEl.offsetHeight;

    let randomX = Math.floor(Math.random() * maxX)
    let randomY = Math.floor(Math.random() * maxY)

    openhelloEl.style.left = randomX + "px";
    openhelloEl.style.top = randomY + "px"
}

    if (opensecretEl){
        opensecretEl.addEventListener("click", openSecretsite)

    let maxX = window.innerWidth - opensecretEl.offsetWidth;
    let maxY = window.innerHeight - opensecretEl.offsetHeight;

    let randomX = Math.floor(Math.random() * maxX)
    let randomY = Math.floor(Math.random() * maxY)

    opensecretEl.style.left = randomX + "px";
    opensecretEl.style.top = randomY + "px"
    }

    setupRandomReturn(["colors", "colorsGood", "colorsBad"]); 
});

let scrollEl = document.getElementById("scrollMenu");
let bodyEl = document.getElementById("body")
let colorEl = document.getElementById("color")
let sizeEl = document.getElementById("textHeigt")
let inputfirstEl = document.getElementById("textinputFirst");
let inputlastEl = document.getElementById("textinputLast");
let textEl = document.getElementById("textWrite")
let helloEl = document.getElementById("helloWrite")


let correctColor = ["#b7d4e1", "#00aeff", "#00aaff", "#FFFFFF", "#005885", "#00fbff", "#004466", "#0c73a6"]
let incorrectColor = ["#000000", "#ff0000"]


function changeColors(e) {
    e.preventDefault()
    let changeColors = colorEl.value.trim()
    console.log(changeColors)

    if (CSS.supports('color', changeColors)) {
        bodyEl.style.backgroundColor = changeColors

        if (correctColor.map(c => c.toLowerCase()).includes(changeColors.toLowerCase())) {
            console.log("Correct color!")
            window.location.replace("Hello.html")
        }

        else if (incorrectColor.map(c => c.toLowerCase()).includes(changeColors.toLowerCase())){
            console.log("Wrong, bye")
            window.location.replace("Bye.html");
        }

        else {
            alert("Try again ")
            bodyEl.style.backgroundColor = "#e6e6fa"
            console.log("Try again")
        }
    }

    else {
        colorEl.style.color = "white"
    }
}

function changeText() {
    let first = inputfirstEl.value;
    let last = inputlastEl.value

    textEl.innerText = first + " " + last;
    helloEl.innerText = "Hello " + first + " " + last
    console.log("Name")
}

function changeTextTag(){
    let selectedTag = scrollEl.value;
    console.log(scrollEl.value)

    let newEl = document.createElement(selectedTag)
    newEl.id = "text"
    newEl.innerText = sizeEl.innerText

    sizeEl.replaceWith(newEl)
    sizeEl = newEl;
}

function helloPerson(){
    console.log(inputfirstEl.value)
    let personfirstName = inputfirstEl.value;
    let personlastName = inputlastEl.value
    alert("Hello " + personfirstName + " " + personlastName)
}

function S(){
//nameEl 
// inputfirstEl
// Make a function that when any if the letters J, E, Z, Q, P is in the name, it will open a secret new side

}



function openSite (){
    console.log("Clicked")
    window.location.replace("Index.html")
}

function openSecretsite (){
    window.location.replace("Secret.html")
}

// what should I do?
function setupRandomReturn(containerIds) {
  // collect all buttons
  const buttons = containerIds
    .map(id => document.getElementById(id))
    .filter(Boolean)
    .flatMap(container => Array.from(container.querySelectorAll("button")));

  if (!buttons.length) return;

  // pick a random winner for this page load
  const winner = buttons[Math.floor(Math.random() * buttons.length)];

  // hook only the winner
  winner.addEventListener("click", () => {
    window.location.replace("Index.html");
  });
}
