// If I need to test something :)
document.addEventListener("DOMContentLoaded", () => {
  setupRandomReturn(["colors", "colorsGood", "colorsBad"]); 
});

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

  // others do nothing (no event listeners needed)
}