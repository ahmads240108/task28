window.addEventListener("scroll", function () {
  var scrollValue = window.scrollY;
  var navbar = document.querySelector(".navbar");
  if (scrollValue > 400) {
    navbar.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-primary");
  } else {
    navbar.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-danger");
  }
});

var timer = setInterval(myTimer, 1000);
function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

var delay;
function getData() {
  alert("Hello World!");
}