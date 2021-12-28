let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let range_letter = 3;
let numSaved = 1;
let encrypted = true;
let decrypted = false;

window.onload = function() {
    let rangeslider = document.getElementById("sliderRange");
    let output = document.getElementById("demo");
    output.innerHTML = rangeslider.value;
    rangeslider.oninput = function () {
        output.innerHTML = this.value;
        range_letter = this.value;
    }

}

function encryptText() {
    let message_encrypted = document.getElementById("text_message");
    message_encrypted.innerHTML = "";
    let message_encrypted_list = []
    let text = document.getElementById("textArea").value.toLowerCase();
    console.log(text.length);
    for (x = 0; x <= text.length; x++) {
        if(text[x] == " ") {
            message_encrypted_list.push(" ");

        }
        else {
            for(n = 0; n < alphabet.length; n++) {
                if(text[x] == alphabet[n]) {
                    message_encrypted_list.push(alphabet[((((Number(n) + Number(range_letter)) % 26) + 26) % 26)]);

                }
            }
        }
    }
    console.log(message_encrypted_list.join(""));
    message_encrypted.innerHTML += message_encrypted_list.join("");
    encrypted = true;
    decrypted = false;
    return message_encrypted_list.join("");

}

function decryptText() {
    let message_decrypted = document.getElementById("text_message");
    message_decrypted.innerHTML = "";
    let message_decrypted_list = []
    let text = document.getElementById("textArea").value.toLowerCase();
    console.log(text.length);
    for (x = 0; x <= text.length; x++) {
        if(text[x] == " ") {
            message_decrypted_list.push(" ");

        }
        else {
            for(n = 0; n < alphabet.length; n++) {
                if(text[x] == alphabet[n]) {
                    message_decrypted_list.push(alphabet[((((Number(n) - Number(range_letter)) % 26) + 26) % 26)]);

                }
            }
        }
    }
    console.log(message_decrypted_list.join(""));;
    decrypted = true;
    encrypted = false;
    message_decrypted.innerHTML += message_decrypted_list.join("");
    return message_decrypted_list.join("");
}

//Speichern

function saveText() {
    numSaved++;
    let multiplier = numSaved * 3;
    let savedText = document.createElement("p");
    savedText.style.cssText = `position: absolute;top: ${65 + multiplier}%;left: 47%;text-align: center;`;
    savedText.classList.add("savedText");
    savedText.innerHTML = `Text ${(numSaved - 1)} : ${(encrypted) ? encryptText(): decryptText()}`;
    document.body.appendChild(savedText);

}