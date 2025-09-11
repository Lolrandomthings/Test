// ==============================
// Utilities (outside DOMContentLoaded)
// ==============================

// Color sets
const correctColor   = ["#b7d4e1", "#00aeff", "#00aaff", "#FFFFFF", "#005885", "#00fbff", "#004466", "#0c73a6"];
const incorrectColor = ["#000000", "#ff0000"];

// Secret letter sets
const lettersFirst = ["J", "E", "G", "H", "Z"];
const lettersLast  = ["Q", "D", "M", "N", "F"];

// One-and-only one navigation per user action
let __navLock = false;
function safeReplace(url) {
  if (__navLock) return;     // ignore additional attempts
  __navLock = true;
  window.location.replace(url);
}

// Decide secret destination (supports the third option)
function decideSecretTarget(first, last) {
  const f = (first || "").toUpperCase();
  const l = (last  || "").toUpperCase();

  const firstHas = lettersFirst.some(ch => f.includes(ch));
  const lastHas  = lettersLast .some(ch => l.includes(ch));

  if (firstHas && lastHas) return "Letter.html";       // third option
  if (firstHas)            return "LetterFirst.html";
  if (lastHas)             return "LetterLast.html";
  return null;
}

/* DEBUG ONLY
["assign","replace"].forEach(fn => {
  const orig = window.location[fn].bind(window.location);
  window.location[fn] = function(url){
    console.log("[NAV]", fn.toUpperCase(), url, "from", new Error().stack.split("\n")[2]?.trim());
    orig(url);
  };
});
*/


// ==============================
// Element refs (assigned on DOMContentLoaded)
// ==============================
let scrollEl, bodyEl, colorEl, sizeEl, inputfirstEl, inputlastEl, textEl, helloEl;

// ==============================
// Pure functions (no DOM assumptions beyond refs existing)
// ==============================
function changeColors(e) {
  e.preventDefault();

  const change = (colorEl?.value || "").trim();
  if (CSS.supports("color", change)) {
    bodyEl.style.backgroundColor = change;

    const lc = change.toLowerCase();
    if (correctColor.some(c => c.toLowerCase() === lc)) {
      console.log("Correct color!");
      safeReplace("Hello.html");
    } else if (incorrectColor.some(c => c.toLowerCase() === lc)) {
      console.log("Wrong, bye");
      safeReplace("Bye.html");
    } else {
      alert("Try again");
      bodyEl.style.backgroundColor = "#e6e6fa";
      console.log("Try again");
    }
  } else {
    colorEl.style.color = "white";
  }
}

function changeText() {
  const first = inputfirstEl?.value || "";
  const last  = inputlastEl?.value  || "";
  if (textEl)  textEl.innerText  = first + " " + last;
  if (helloEl) helloEl.innerText = "Hello " + first + " " + last;
  console.log("Name");
}

function changeTextTag() {
  const selectedTag = scrollEl?.value;
  if (!selectedTag || !sizeEl) return;

  const newEl = document.createElement(selectedTag);
  newEl.id = "text";
  newEl.innerText = sizeEl.innerText;

  sizeEl.replaceWith(newEl);
  sizeEl = newEl;
}

function helloPerson() {
  const first = inputfirstEl?.value || "";
  const last  = inputlastEl?.value  || "";
  alert("Hello " + first + " " + last);
}

function openSite () {
  console.log("Clicked");
  safeReplace("Index.html");
}

function openSecretsite () {
  safeReplace("Secret.html");
}

function setupRandomReturn(containerIds) {
  const buttons = containerIds
    .map(id => document.getElementById(id))
    .filter(Boolean)
    .flatMap(container => Array.from(container.querySelectorAll("button")));

  if (!buttons.length) return;

  const winner = buttons[Math.floor(Math.random() * buttons.length)];
  winner.addEventListener("click", () => {
    safeReplace("Index.html");
  }, { once: true });
}

// ==============================
// DOM wiring
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  // Assign refs now that DOM is ready
  scrollEl     = document.getElementById("scrollMenu");
  bodyEl       = document.getElementById("body");
  colorEl      = document.getElementById("color");
  sizeEl       = document.getElementById("textHeigt");
  inputfirstEl = document.getElementById("textinputFirst");
  inputlastEl  = document.getElementById("textinputLast");
  textEl       = document.getElementById("textWrite");
  helloEl      = document.getElementById("helloWrite");

  const submitEl     = document.getElementById("submitBtn");
  let   nameEl       = document.getElementById("namebtn");
  const openbyeEl    = document.getElementById("byeBtn");
  const openhelloEl  = document.getElementById("helloBtn");
  const opensecretEl = document.getElementById("secretBtn");

  // --- Page guard for secret logic  // <<<
  // Only attach the name/secret handler on the Index page.
  // Adjust the condition if your index route differs.
  const ON_INDEX = /(?:^|\/)(?:index\.html?)?$/i.test(location.pathname) || location.pathname === "/" ;

  // Listeners
  if (submitEl)     submitEl.addEventListener("click", changeColors);
  if (inputfirstEl) inputfirstEl.addEventListener("input", changeText);
  if (inputlastEl)  inputlastEl.addEventListener("input", changeText);
  if (scrollEl)     scrollEl.addEventListener("change", changeTextTag);

  if (nameEl && ON_INDEX) {                      // <<< only on Index
    // Ensure no legacy listeners linger on this element
    const clean = nameEl.cloneNode(true);
    nameEl.replaceWith(clean);
    nameEl = clean;

    nameEl.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();

      const target = decideSecretTarget(inputfirstEl?.value, inputlastEl?.value);

      if (target) {
        nameEl.disabled = true;                  // stop double-clicks
        safeReplace(target);                     // single, authoritative navigation
        return;
      }

      // No secrets → just greet
      helloPerson();
    }, { once: true });
  }

  if (openbyeEl) {
    openbyeEl.addEventListener("click", openSite);
    const maxX = window.innerWidth  - openbyeEl.offsetWidth;
    const maxY = window.innerHeight - openbyeEl.offsetHeight;
    openbyeEl.style.left = Math.floor(Math.random() * maxX) + "px";
    openbyeEl.style.top  = Math.floor(Math.random() * maxY) + "px";
  }

  if (openhelloEl) {
    openhelloEl.addEventListener("click", openSite);
    const maxX = window.innerWidth  - openhelloEl.offsetWidth;
    const maxY = window.innerHeight - openhelloEl.offsetHeight;
    openhelloEl.style.left = Math.floor(Math.random() * maxX) + "px";
    openhelloEl.style.top  = Math.floor(Math.random() * maxY) + "px";
  }

  if (opensecretEl) {
    opensecretEl.addEventListener("click", openSecretsite);
    const maxX = window.innerWidth  - opensecretEl.offsetWidth;
    const maxY = window.innerHeight - opensecretEl.offsetHeight;
    opensecretEl.style.left = Math.floor(Math.random() * maxX) + "px";
    opensecretEl.style.top  = Math.floor(Math.random() * maxY) + "px";
  }

  setupRandomReturn(["colors", "colorsGood", "colorsBad"]);
});
