let bodyEl = document.getElementById("body")
let colorEl = document.getElementById("color")
let textEl = document.getElementById("textWrite")
let inputfirstEl = document.getElementById("textinputFirst")
let inputlastEl = document.getElementById("textinputLast")
let submitEl = document.getElementById("submitBtn")
let scrollEl = document.getElementById("scrollMenu")
let sizeEl = document.getElementById("textHeigt")
let nameEl = document.getElementById("namebtn")

// nameEl

let correctColor = ["#b7d4e1", "#00aeff", "#00aaff", "#FFFFFF", "#005885", "#00fbff"]
let incorrectColor = ["#000000", "#ff0000"]


// Function to change background color

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
            console.log("Not correct")
            window.close()
        }

        else {
            console.log("Try again")
        }
    }

    else {
        colorEl.style.color = "white"
    }
}

submitEl.addEventListener("click", changeColors)
inputfirstEl.addEventListener("input", changeText)
inputlastEl.addEventListener("input", changeText)

function changeText() {
    let first = inputfirstEl.value;
    let last = inputlastEl.value

    textEl.innerText = first + " " + last;
    console.log("Name")
}

scrollEl.addEventListener("change", changeTextTag)

function changeTextTag(){
    let selectedTag = scrollEl.value;
    console.log(scrollEl.value)

    let newEl = document.createElement(selectedTag)
    newEl.id = "text"
    newEl.innerText = sizeEl.innerText

    sizeEl.replaceWith(newEl)
    sizeEl = newEl
}

nameEl.addEventListener("click", helloPerson)

function helloPerson(){
    console.log(inputfirstEl.value)
    let personfirstName = inputfirstEl.value;
    let personlastName = inputlastEl.value
    alert("Hello " + personfirstName + " " + personlastName)
}

