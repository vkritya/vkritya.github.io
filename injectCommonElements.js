function injectHeader() {
  var target = document.getElementById("fejlec");
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    target.innerHTML = this.responseText;
  };
  xhttp.open("GET", "header.html", true);
  xhttp.send();
}

function injectFooter() {
  var target = document.getElementById("lablec");
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    target.innerHTML = this.responseText;
  };
  xhttp.open("GET", "footer.html", true);
  xhttp.send();
}