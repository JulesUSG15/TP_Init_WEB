function display(img = '', desc = null) {
    if (desc == null ) {
        desc = "Mouse over the sun and the planets and see the different descriptions.";
    }

    document.getElementById("planet-desc").innerHTML = desc;
    document.getElementById("planet-img").src = img;
}