document.addEventListener("DOMContentLoaded", () => {
    let submitEl = document.getElementById("submitBtn");
    let nameEl = document.getElementById("namebtn");
    let openbyeEl = document.getElementById("byeBtn");
    let openhelloEl = document.getElementById("helloBtn")
    let opensecretEl = document.getElementById("secretBtn")
    let nameJayEl = document.getElementById("nameJayBtn")
    let fakebuttonEl = document.getElementById("fakeBtn")
    let hoverbuttonEl = document.getElementById("hoverBtn")
    let passwordEl = document.getElementById("passwordBtn")
    let nebuttonEl = document.getElementById("idonthavegoodnamesanymorebtn")
    let redwebbuttonEl = document.getElementById("redwebsubmitBtn")
    let colorbuttonEl = document.getElementById("guesscolorBtn")
    let textbtnEl = document.getElementById("textsubmitBtn")
    let darkbtnEl = document.getElementById("darksubmitBtn")

    
    if (submitEl) submitEl.addEventListener("click", changeColors);
    if (inputfirstEl) inputfirstEl.addEventListener("input", changeText);
    if (scrollEl) scrollEl.addEventListener("change", changeTextTag);
    if (passwordEl) passwordEl.addEventListener("click", guessPassword);
    if (redwebbuttonEl) redwebbuttonEl.addEventListener("click", redwebpasswordGuess)
    if (colorbuttonEl) colorbuttonEl.addEventListener("click", colorGuess)
    if (textbtnEl) textbtnEl.addEventListener("click", textpasswordGuess)
    if (darkbtnEl) darkbtnEl.addEventListener("click", friendpasswordGuess)
    if (nameEl) {
        nameEl.addEventListener("click", () => {
            helloPerson();
            nameIsCorrect();
        });
    }

    if (openbyeEl) {
        openbyeEl.addEventListener("click", openByeSite);
        
    let maxX = window.innerWidth - openbyeEl.offsetWidth;
    let maxY = window.innerHeight - openbyeEl.offsetHeight;

    let randomX = Math.floor(Math.random() * maxX)
    let randomY = Math.floor(Math.random() * maxY)

    openbyeEl.style.left = randomX + "px";
    openbyeEl.style.top = randomY + "px"    
    }

    if (openhelloEl) {
        openhelloEl.addEventListener("click", openHelloSite)

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

    setupRandomReturnGood(["colorsGood"]); 
    setupRandomReturnBad(["colorsBad"])

    if (fakebuttonEl) {
        fakebuttonEl.addEventListener("click", fakebuttonEl)
        
        let maxX = window.innerWidth - fakebuttonEl.offsetWidth;
        let maxY = window.innerHeight - fakebuttonEl.offsetHeight;

        let randomX = Math.floor(Math.random() * maxX)
        let randomY = Math.floor(Math.random() * maxY)

        fakebuttonEl.style.left = randomX + "px"
        fakebuttonEl.style.top = randomY + "px"
    }
    
    if (fakebuttonEl) {
        fakebuttonEl.addEventListener("click", () =>{
        document.getElementById("fakeText").style.display = 'block';
        });
    }

    if (nameJayEl) {
        nameJayEl.addEventListener("click", () => {
        document.getElementById("secretText").style.display = 'block';
        });
    }

    if (hoverbuttonEl) {
        hoverbuttonEl.addEventListener("mouseover", hoverbuttonEl )

        let maxX = window.innerWidth - hoverbuttonEl.offsetWidth;
        let maxY = window.innerHeight - hoverbuttonEl.offsetHeight;

        let randomX = Math.floor(Math.random() * maxX)
        let randomY = Math.floor(Math.random() * maxY)

        hoverbuttonEl.style.left = randomX + "px"
        hoverbuttonEl.style.top = randomY + "px"
    }

    if (hoverbuttonEl) {
        hoverbuttonEl.addEventListener("mouseover", () => {
            document.getElementById("password").style.display = 'block';
        })
    }

    if (nebuttonEl){
        nebuttonEl.addEventListener("click", nebuttonEl)
            let maxX = window.innerWidth - nebuttonEl.offsetWidth;
            let maxY = window.innerHeight - nebuttonEl.offsetHeight;

            let randomX = Math.floor(Math.random() * maxX)
            let randomY = Math.floor(Math.random() * maxY)

            nebuttonEl.style.left = randomX + "px"
            nebuttonEl.style.top = randomY + "px"
    }

    if (nebuttonEl){
        nebuttonEl.addEventListener("click", ()=> {
            document.getElementById("redwebPassword").style.display = 'block';
        })
    }
});

let scrollEl = document.getElementById("scrollMenu");
let bodyEl = document.getElementById("body")
let colorEl = document.getElementById("color")
let sizeEl = document.getElementById("textHeigt")
let inputfirstEl = document.getElementById("textinputFirst"); 
let textEl = document.getElementById("textWrite")
let helloEl = document.getElementById("helloWrite")
let inputpasswordEl = document.getElementById("inputPassword")
let redwebpasswordEl = document.getElementById("redwebsubmit")
let colorinputEl = document.getElementById("guesscolorInput")
let textinputEl = document.getElementById("textInput")
let textDarkEl = document.getElementById("darkInput")

let correctColor = ["#b7d4e1", "#00aeff", "#00aaff", "#FFFFFF", "#005885", "#00fbff", "#004466", "#0c73a6", "#e6e6fa"]
let incorrectColor = ["#000000", "#ff0000", "#00ff00", "#0000ff"]
let passwordColor ="#9370bd"

let correctName = "Jay"
let correctPassword = "RedVelvetCake"
let secretPassword = "ILoveBees"
let passwordRed = "RedWebpod"
let textpassword = "YDOIHAVETO"
let darkPassword = "Laura Fabiola Sanchez Ayala"

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
    
    textEl.innerText = first
    helloEl.innerText = "Hello " + first
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
    alert("Hello " + personfirstName)
}

function nameIsCorrect() {
    let firstName = inputfirstEl.value.toUpperCase();
    if (firstName === correctName.toUpperCase()) {
        window.location.replace("NameSame.html") 
    }
}

function openByeSite (){
    console.log("Clicked")
    window.location.replace("text.html")
}

function openHelloSite (){
    console.log("Clicked")
    window.location.replace("index.html")
}

function openSecretsite (){
    window.location.replace("Secret.html")
}

function setupRandomReturnGood(containerIds) {
    const buttons = containerIds
    .map(id => document.getElementById(id))
    .filter(Boolean)
    .flatMap(container => Array.from(container.querySelectorAll("button")));
    
    if (!buttons.length) return;
    
    const winner = buttons[Math.floor(Math.random() * buttons.length)];
    
    winner.addEventListener("click", () => {
        window.location.replace("Index.html");
    });
}

function setupRandomReturnBad(containerIds){
    const buttons = containerIds
    .map(id => document.getElementById(id))
    .filter(Boolean)
    .flatMap(container => Array.from(container.querySelectorAll("button")))

    if(!buttons.length) return;

    const winner = buttons[Math.floor(Math.random() * buttons.length)]

    winner.addEventListener("click", () => {
        window.location.replace("color.html")
    })
}

function guessPassword (){
    let password = inputpasswordEl.value.toUpperCase();
    if (password === correctPassword.toUpperCase()) {
        window.location.replace("redvelvetcake.html")
    }
    else if (password === secretPassword.toLocaleUpperCase()){
        window.location.replace("secretPass.html")
    }
    else {
        alert("Need a clue? Look closely at the text, the password is in there")
    }
}

function redwebpasswordGuess(){
    let password = redwebpasswordEl.value.toUpperCase();
    if (password === passwordRed.toUpperCase()){
        window.location.replace("index.html")
    }
    else {
        alert("Go listen to RedWebPod then come back")
    }
}

let failCount = 0;
const hints = Array.from(document.querySelectorAll(".hint"))

function revealnextHint(){
    const nextHidden = hints.find(h => h.hidden)
    if (nextHidden) nextHidden.hidden = false;
}

function hideallHints(){
    hints.forEach(h => h.hidden = true)
}

function colorGuess (){
    let password = colorinputEl.value.trim().toUpperCase();

    if (password && password === passwordColor.toUpperCase()){
        console.log("Works")
        window.location.replace("index.html")
        return;
    }
    
    failCount++
    console.log("Try again")

    if(failCount %2 === 0) {
        revealnextHint()
    }
}

function textpasswordGuess(){
    let password = textinputEl.value.toUpperCase()

    if(password === textpassword.toUpperCase()){
        //console.log("Correct")
        alert("9 is a cool number. Dont you think? Also lets go to the next page ->")
        window.location.replace("dark.html")
    }
}

function friendpasswordGuess(){
    let password = textDarkEl.value.toUpperCase()

    if(password === darkPassword.toUpperCase()){
        //console.log("Correct")
        window.location.replace("index.html")
    }
}