const pass1 = document.getElementById("password1")
const pass2 = document.getElementById("password2") 
const pass3 = document.getElementById("password3") 
const pass4 = document.getElementById("password4") 
const generateBtn = document.getElementById('generate')

const char = "`~@#$%^&*()_+{}|dsasad:<>0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

function generate() {
  pass1.value = Array(15).fill(char).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
  pass2.value = Array(15).fill(char).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
  pass3.value = Array(15).fill(char).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
  pass4.value = Array(15).fill(char).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
}

function copy(pass) {
  let copyText = pass;
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  alert("Your password: " + copyText.value + " is copied!");
}

generateBtn.addEventListener ('click', generate)

