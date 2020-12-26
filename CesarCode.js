let fs = require('fs');
let arg = process.argv;
let originalText = fs.readFileSync('TheLittlePrince.txt');
string = originalText.toString();
let message = "";
let decryptmessage = "";
let shift = 10;
let maxfreqletter = "e";

function encrypt(string, shift) {
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) {
            id = (string.charCodeAt(i) - 97 + shift) % 26 + 97;
            message += String.fromCharCode(id);
        }
        else if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) {
            id = (string.charCodeAt(i) - 65 + shift) % 26 + 65;
            message += String.fromCharCode(id);
        }
        else message += String.fromCharCode(string.charCodeAt(i));
    }
}
encrypt(string, shift);
fs.writeFileSync('TheLittlePrinceEncrypted.txt', message);
console.log('Encryption was successful');

let encryptedText = fs.readFileSync('TheLittlePrinceEncrypted.txt');
string = encryptedText.toString();

function decryption(message) {

    let lettersArray = new Array();
    let max = 0;
    let maxletter = "";
    let decryptshift = 0;
    for (var i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) > 96 && message.charCodeAt(i) < 123 || message.charCodeAt(i) > 64 && message.charCodeAt(i) < 91) {
            if (message[i] in lettersArray) {
                lettersArray[message[i]] += 1;
            }
            else {
                lettersArray[message[i]] = 1;
            }
        }
    }

    for (var i = 0; i < message.length; i++) {
        if (lettersArray[message[i]] > max) {
            max = lettersArray[message[i]];
            maxletter = message[i];
        }
    }

    decryptshift = maxletter.charCodeAt(0) - maxfreqletter.charCodeAt(0);
    console.log('Cesar code shift -', decryptshift);
    for (let i = 0; i < message.length; i++) {
        let id = 0;
        if (message.charCodeAt(i) > 96 && message.charCodeAt(i) < 123) {
            id = (message.charCodeAt(i) - 97 - decryptshift + 26) % 26 + 97;
            decryptmessage += String.fromCharCode(id);
        }
        else if (message.charCodeAt(i) > 64 && message.charCodeAt(i) < 91) {
            id = (message.charCodeAt(i) - 65 - decryptshift + 26) % 26 + 65;
            decryptmessage += String.fromCharCode(id);
        }
        else
            decryptmessage += String.fromCharCode(message.charCodeAt(i));
    }
    fs.writeFileSync('TheLittlePrinceDecrypted.txt', decryptmessage);
    console.log("Decryption was successful");
}
decryption(message);
