// If I need to test something :)
let openEl = document.getElementById("byeBtn")

openEl.addEventListener("click", openSite);

function openSite (){
    console.log("Clicked")
    window.location.replace("Index.html")
}