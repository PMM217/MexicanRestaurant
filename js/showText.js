// JavaScript code to show/hide text when image is clicked
function showText(imageNumber) {
    var textId = "text" + imageNumber;
    var textElement = document.getElementById(textId);
    
    // Toggle text visibility
    if (textElement.style.display === "none") {
        textElement.style.display = "block";
    } else {
        textElement.style.display = "none";
    }
}