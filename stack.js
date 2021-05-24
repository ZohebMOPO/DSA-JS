var ar = [];

var word = "kayak";

var reversed = "";

for (let i = 0; i < word.length; i++) {
  ar.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
  reversed += ar.pop();
}

if (word === reversed) {
  console.log("The word is palindrome");
} else {
  console.log("The word is not Palindrome");
}
