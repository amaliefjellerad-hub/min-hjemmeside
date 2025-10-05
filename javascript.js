function skiftTekst() {
  document.getElementById("text1").textContent = "Nu er teksten blevet skiftet!";
}

function skiftBaggrund() {
  const farver = ["#ff9999", "#99ff99", "#9999ff", "#ffff99", "#ffccff"];
  const tilfældig = farver[Math.floor(Math.random() * farver.length)];
  document.body.style.backgroundColor = tilfældig;
}

function toggleElement() {
  const el = document.getElementById("text3");
  if (el.style.display === "none") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}

let count = 0;
function taelOp() {
  count++;
  document.getElementById("counter").textContent = count;
}
function taelNed() {
  count--;
  document.getElementById("counter").textContent = count;
}

function tegnOptaelling() {
  const input = document.getElementById("input5").value;
  document.getElementById("count5").textContent = input.length;
}

function visTekst() {
  const input = document.getElementById("input6").value;
  document.getElementById("output6").textContent = input;
}








