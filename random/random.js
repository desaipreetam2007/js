
const result = document.getElementById("result");
function roll() {
     const max = Number(document.getElementById("max").value);
     const min = Number(document.getElementById("min").value);
     const rand = Math.floor(Math.random() * (max - min + 1)) + min;
     result.textContent=`Your random number is ${rand}`;
}