function addToText(values) {
    document.getElementById("text").value += values;
}
function delToText() {
    var txt = document.getElementById("text").value;
    document.getElementById("text").value = txt.slice(0, txt.length - 1);
}
function clearToText() {
    document.getElementById("text").value = "";
}
function calcToText() {
    var txt = document.getElementById("text").value;
    txt.replace("÷", "/");
    txt.replace("×", "*");
    var result = eval(txt);
    document.getElementById("text").value = result;
}