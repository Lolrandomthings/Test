let bodyEl = document.getElementById("body")
let colorEl = document.getElementById("color")
let textEl = document.getElementById("textWrite")
let inputEl = document.getElementById("textinput")
let submitEl = document.getElementById("submitBtn")
let scrollEl = document.getElementById("scrollMenu")
let sizeEl = document.getElementById("textHeigt")

// Function to change background color
function changeColorS(e) {
    e.preventDefault()
    let changeColorS = colorEl.value
    console.log("Color")
    
    if (CSS.supports('color', changeColorS)) {
        bodyEl.style.backgroundColor = changeColorS
    } else {
        colorEl.style.color = "white"
    }   
}

submitEl.addEventListener("click", changeColorS)
inputEl.addEventListener("input", changeText)


function changeText() {
    let textChange = inputEl.value;
    textEl.innerText = textChange;
    console.log("NewText")
}

scrollEl.addEventListener("change", changeTextTag)

function changeTextTag(){
    let selectedTag = scrollEl.value;
    console.log("Size")

    let newEl = document.createElement(selectedTag)
    newEl.id = "text"
    newEl.innerText = sizeEl.innerText

    sizeEl.replaceWith(newEl)

    sizeEl = newEl
}
