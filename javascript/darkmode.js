function displayMode() {
    console.log("displayMode");
    if ( localStorage.getItem("dark-mode") === "on") {
        document.body.classList.add("dark-mode");
        document.getElementById("toogle").classList.add("dark-mode");
        document.getElementById("toogle").innerHTML = 'Mode clair';
    }
    else {
        document.body.classList.remove("dark-mode");
        document.getElementById("toogle").classList.remove("dark-mode");
        document.getElementById("toogle").innerHTML = 'Mode sombre';
    }
}

function ChangeMode () {
    if ( localStorage.getItem("dark-mode") === "on") {
        localStorage.setItem("dark-mode", "off");
    } else {
        localStorage.setItem("dark-mode", "on");
    }
    displayMode();
}

window.onload = function() {
    displayMode();
    

document.getElementById("toogle").addEventListener("click", ChangeMode);
}