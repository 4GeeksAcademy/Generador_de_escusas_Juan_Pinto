let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function generateExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  // Concatenar las partes en una excusa
  let excuse =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + ".";

  // Establecer el contenido de #excuse con la nueva excusa
  document.getElementById("excuse").innerHTML = excuse;
}

// Ejecutar la función cuando la página se carga
window.onload = generateExcuse;
