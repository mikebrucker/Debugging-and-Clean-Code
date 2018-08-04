/**
Javascript features and functions in use: 
- FOR OF Loop:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
- FOR IN Loop:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
- CHARCODEAT:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
- FROMCHARCODE:   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
- ARRAY JOIN:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
**/

function encode(word) {
//somewhere to store the converted caracters
    let result = [];
//next we loop over each character in the string.
    for (let i = 0; i < word.length; i++) {
//and save the charcode to the array
        result.push(word.charCodeAt(i));
    }
// and return that list of codes, separated by colon return 
    return result.join(':');
}

function decode(hash) {
//split the code by semicolons!
    let array = hash.split(':');
// again somewhere to put our codes 
    let result = [];
//loop over the codes
    for (let j = 0; j < array.length; j++) {
//change the code back to the string character equivalent    
        result.push(String.fromCharCode(array[j]));
    }
    return result.join('');
}

let message = "I'm trying to send this secret message.";
let encodedMessage = encode(message);
let decodedMessage = decode(encodedMessage);

console.log(message);
console.log(encodedMessage);
console.log(decodedMessage);
// Tasks the google doc asked to do
console.log(encode('dog'));
console.log(encode('cat'));
console.log(encode('My name is Groot'));
console.log(decode('99:97:116'));
console.log(decode('100:111:103'));
console.log(decode('77:121:32:110:97:109:101:32:105:115:32:71:114:111:111:116'));