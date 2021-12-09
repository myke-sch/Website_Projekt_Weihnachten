let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
window.onload = function() {
    let rangeslider = document.getElementById("sliderRange");
    let output = document.getElementById("demo");
    output.innerHTML = rangeslider.value;
    rangeslider.oninput = function () {
        output.innerHTML = this.value;
    }

}

function encryptText() {
    let text = document.getElementById("textArea").value.toLowerCase();
    console.log(text);
    for (x = 0; x < text.length; x++) {
        console.log(text[x]);
    }
}