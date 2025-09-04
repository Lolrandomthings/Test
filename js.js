let bodyEl = document.getElementById("body")
let colorEl = document.getElementById("color")
let textEl = document.getElementById("textWrite")
let inputEl = document.getElementById("textinput")
let submitEl = document.getElementById("submitBtn")
let scrollEl = document.getElementById("scrollMenu")
let sizeEl = document.getElementById("textHeigt")

let CorrectColor = ["#b7d4e1", "#00aeff", "#00aaff", "#000000", "#FFFFFF", "#005885"]


// Function to change background color

function changeColors(e) {
    e.preventDefault()
    let changeColors = colorEl.value.trim()
    console.log(changeColors)
    
    if (CSS.supports('color', changeColors)) {
        bodyEl.style.backgroundColor = changeColors

        if (CorrectColor.map(c => c.toLowerCase()).includes(changeColors.toLowerCase())) {
            console.log("Correct color!")
        }
    } else {
        colorEl.style.color = "white"
    }
}


submitEl.addEventListener("click", changeColors)
inputEl.addEventListener("input", changeText)


function changeText() {
    let textChange = inputEl.value;
    textEl.innerText = textChange;
    console.log("text")
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
