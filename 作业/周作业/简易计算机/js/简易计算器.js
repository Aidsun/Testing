function appendToResult(value) {
    document.getElementById("resultField").value += value;
}
function delResult() {
    var txt = document.getElementById("resultField").value;
    document.getElementById("resultField").value = txt.slice(0, txt.length - 1);
}
function calculate() {
    var result = eval(document.getElementById("resultField").value);
    document.getElementById("resultField").value = result;
}

function clearResult() {
    document.getElementById("resultField").value = "";
}