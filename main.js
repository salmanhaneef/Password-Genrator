let range = document.getElementById("myrange");
let range2 = document.getElementById("rangevalue");

range.addEventListener("input", () => {
  let value = range.value;
  range2.innerHTML = value;
});
function generatepassword(event) {
  event.preventDefault();
  let chare = "abcdefghijklmnopqrstuvwxyz1234567890";
  let charm = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  let charh =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!£$%^&*()_+=";
  let pass = "";

  let length = document.getElementById("myrange").value;

  let difficulty = document.querySelector(
    'input[name="difficulty"]:checked'
  ).value;
  if (difficulty === "easy") {
    for (let i = 0; i < length; i++) {
      pass = pass + chare[Math.floor(Math.random() * chare.length)];
    }
  } else if (difficulty === "medium") {
    for (let i = 0; i < length; i++) {
      pass = pass + charm[Math.floor(Math.random() * charm.length)];
    }
  } else if (difficulty === "hard") {
    for (let i = 0; i < length; i++) {
      pass = pass + charh[Math.floor(Math.random() * charh.length)];
    }
  }
  document.getElementById("text").value = pass;
  console.log(pass);
}
document.getElementById("copyIcon").addEventListener("click", function () {
  var textBox = document.getElementById("text").value; 

  navigator.clipboard.writeText(textBox).then(
    function () {
      alert("Text copied to clipboard");
    },
    function (err) {
      console.error("Failed to copy text", err);
    }
  );
});
