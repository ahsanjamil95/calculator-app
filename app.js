// JavaScript Document
function numberGet(num) {
  var display = document.getElementById('display');
	display.value += num;
}
function reset() {
  var display = document.getElementById('display');
	display.value = ""
}

function result() {
  var display = document.getElementById('display');
	display.value = eval(display.value);
}