document.addEventListener("DOMContentLoaded", () => {
    let submitEl = document.getElementById("submitBtn");
    let nameEl = document.getElementById("namebtn");
    let openbyeEl = document.getElementById("byeBtn");
    let openhelloEl = document.getElementById("helloBtn")
    
    if (submitEl) submitEl.addEventListener("click", changeColors);
    if (inputfirstEl) inputfirstEl.addEventListener("input", changeText);
    if (inputlastEl) inputlastEl.addEventListener("input", changeText);
    if (scrollEl) scrollEl.addEventListener("change", changeTextTag);
    if (nameEl) nameEl.addEventListener("click", helloPerson);
    if (openbyeEl) openbyeEl.addEventListener("click", openSite);
    if (openhelloEl) openhelloEl.addEventListener("click", openSite)
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
            bodyEl.style.backgroundColor = "#FFFFFF"
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

function openSite (){
    console.log("Clicked")
    window.location.replace("Index.html")
}

// what should I do?
