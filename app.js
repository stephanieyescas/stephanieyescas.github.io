
let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

function sort() {
  var array = new Array();
  array[0] = Number(document.getElementById("number1").value);
  array[1] = Number(document.getElementById("number2").value);
  array[2] = Number(document.getElementById("number3").value);
  array.sort((a,b)=>a-b)
  alert(array);
}
