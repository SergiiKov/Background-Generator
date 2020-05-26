var csscode = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradientbg");

console.log(csscode);
console.log(color1);
console.log(color2);

function setGragient(){
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")"; 
    csscode.textContent = body.style.background + ";";
}

color1.addEventListener("input",setGragient);

color2.addEventListener("input",setGragient);