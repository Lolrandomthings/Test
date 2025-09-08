document.addEventListener("DOMContentLoaded", () => {
    const submitEl = document.getElementById("submitBtn");
    const inputfirstEl = document.getElementById("textinputFirst");
    const inputlastEl = document.getElementById("textinputLast");
    const scrollEl = document.getElementById("scrollMenu");
    const nameEl = document.getElementById("namebtn");
    const openEl = document.getElementById("byeBtn");
    const textEl = document.getElementById("textWrite")
    const helloEl = document.getElementById("helloWrite")
    const sizeEl = document.getElementById("textHeigt")

    if (submitEl) submitEl.addEventListener("click", changeColors);
    if (inputfirstEl) inputfirstEl.addEventListener("input", changeText);
    if (inputlastEl) inputlastEl.addEventListener("input", changeText);
    if (scrollEl) scrollEl.addEventListener("change", changeTextTag);
    if (nameEl) nameEl.addEventListener("click", helloPerson);
    if (openEl) openEl.addEventListener("click", openSite);
});

const bodyEl = document.getElementById("body")
const colorEl = document.getElementById("color")


let correctColor = ["#b7d4e1", "#00aeff", "#00aaff", "#FFFFFF", "#005885", "#00fbff"]
let incorrectColor = ["#000000", "#ff0000"]


function changeColors(e) {
    e.preventDefault()
    let changeColors = colorEl.value.trim()
    console.log(changeColors)

    if (CSS.supports('color', changeColors)) {
        bodyEl.style.backgroundColor = changeColors

        if (correctColor.map(c => c.toLowerCase()).includes(changeColors.toLowerCase())) {
            console.log("Correct color!")
            alert("Correct")
        }

        else if (incorrectColor.map(c => c.toLowerCase()).includes(changeColors.toLowerCase())){
            console.log("Wrong, bye")
            window.location.replace("Bye.html");
        }

        else {
            alert("Try again ")
            //bodyEl.style.backgroundColor = "#FFFFFF"
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
    sizeEl = newEl
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