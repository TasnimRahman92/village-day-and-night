function toggleMode() {
    let body = document.body;
    let button = document.getElementById("modeToggle");
    let isNight = body.classList.toggle("night-mode");

    if (isNight) {
        button.textContent = "Switch to Day";
        document.getElementById("myImage").src = "moon.gif";
        document.getElementById("myTree").src = "tree2.jpg";
        document.getElementById("myCycle").src = "cycle1.png";
    } else {
        button.textContent = "Switch to Night";
        document.getElementById("myImage").src = "sun1.gif";
        document.getElementById("myTree").src = "tree2.jpg";
        document.getElementById("myCycle").src = "cycle1.png";
    }
}