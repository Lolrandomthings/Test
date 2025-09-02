let bodyEl = document.getElementById("body")
let colorEl = document.getElementById("color")
let textEl = document.getElementById("text")
let inputEl = document.getElementById("textinput")  
let colorChangeEl = document.getElementById("background") //Replacement for bodyEl

bodyEl.addEventListener("change", changeColorS)
// inputEl.addEventListener("input", changeText)

function changeColorS(e){
    console.log(colorEl.value)
    let changeColorS = colorEl.value
    
    if (CSS.supports('color', changeColorS)){
        // colorEl.style.color = "White"
        bodyEl.style.backgroundColor = changeColorS;
    }
    else{
        colorEl.style.color = "white"
    }
}



scrollEl.addEventListener("change", changeTextTag)

function changeTextTag(){
    let selectedTag = scrollEl.value;

    let newEl = document.createElement(selectedTag)
    newEl.id = "text"
    newEl.innerText = textEl.innerText

    textEl.replaceWith(newEl)

    textEl = newEl
}



// let scrollEl = document.getElementById ("scrollMenu")