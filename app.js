function calculator(number) {
    var input = document.getElementById("calInput")
    input.value += number;

}
function operators() {
    var input = document.getElementById("calInput");
    var result = eval(input.value);
    input.value = result;
}

function allClear() {
    var input = document.getElementById("calInput");
    input.value = " ";
}
function clearNum() {
    var input = document.getElementById("calInput");
    input.value = input.value.slice(0, -1);
}