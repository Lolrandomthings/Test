// ✅ Checks if ANY of the lettersFirst chars are present in the first name
function letterFirst(firstName) {
  if (!firstName) return false;

  // normalize & uppercase so Å/ä etc. match their base letters
  const normalized = firstName
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toUpperCase();

  return lettersFirst.some(ch => normalized.includes(ch.toUpperCase()));
}

// ✅ Checks if ANY of the lettersLast chars are present in the last name
function letterLast(lastName) {
  if (!lastName) return false;

  const normalized = lastName
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toUpperCase();

  return lettersLast.some(ch => normalized.includes(ch.toUpperCase()));
}

// ✅ Decide which page to open based on matches
function openLetterPageIfMatch() {
  const first = inputfirstEl?.value || "";
  const last  = inputlastEl?.value  || "";

  const hasFirst = letterFirst(first);
  const hasLast  = letterLast(last);

  if (hasFirst && hasLast) {
    window.location.replace("letter.html");
  } else if (hasFirst) {
    window.location.replace("letterFirst.html");
  } else if (hasLast) {
    window.location.replace("letterLast.html");
  }
  else (){
    alert("Hello " + first + last)
  }
}
