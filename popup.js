chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    document.getElementById("output").innerHTML = selection != "" ? rot13(selection[0]) : "No text selected!";
});

function rot13(text) {
  return text.replace(/[a-z]/gi, function(letter){
    return String.fromCharCode((letter <= "Z" ? 90 : 122) >= ( letter = letter.charCodeAt(0)+13) ? letter : letter-26);
  });
}
