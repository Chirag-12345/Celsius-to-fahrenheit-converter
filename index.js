function myfunction() {
  var temp = document.getElementById("Given-Temperetaure").value;
  document.getElementById("old").innerHTML = temp;
  document.getElementById("new").innerHTML = ((9 * temp) / 5 + 32).toPrecision(4);
  document.getElementsByTagName("p")[0].style.display = "block";
}
