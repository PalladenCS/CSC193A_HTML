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
        var text = document.getElementById("textInput");
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    } else {
        var text = document.getElementById("textInput");
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}