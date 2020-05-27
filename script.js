const csscode = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradientbg");

function setGragient(){
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")"; 
    csscode.textContent = body.style.background + ";";
}

color1.addEventListener("input",setGragient);
color2.addEventListener("input",setGragient);

const setBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
    return randomColor;
}

genNew.addEventListener("click", setBg);

const createRandomGradient= () => {
    const randomColor1 = setBg();
    const randomColor2= setBg(); 
    body.style.background = "linear-gradient(to right," + "#" + randomColor1 + ", " + "#" + randomColor2 + ")"; 
    csscode.textContent = body.style.background + ";";
}

genNew.addEventListener("click", createRandomGradient);
createRandomGradient();


