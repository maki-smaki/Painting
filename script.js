function changeImage() {
    var catImage = document.getElementById("catImage");
    if (catImage.src.match("stepan.png")) {
        catImage.src = "new_stepan.jpg";
    } else {
        catImage.src = "stepan.png";
    }
}