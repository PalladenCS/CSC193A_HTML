function big() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function moo() {
  var textArea = document.getElementById("textInput");
  var text = textArea.value.toUpperCase();
  var parts = text.split(".");
  textArea.value = parts.join("-MOO.");
}

function fancy(isFancy) {
    if (isFancy){
        document.getElementById("textInput").style.fontWeight = "bold";
        document.getElementById("textInput").style.color = "blue";
        document.getElementById("textInput").style.textDecoration = "underline";
    } else {
        document.getElementById("textInput").style.fontWeight = "normal";
        document.getElementById("textInput").style.color = "black";
        document.getElementById("textInput").style.textDecoration = "none";
    }
}