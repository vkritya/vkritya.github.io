function injectCommon(index) {
  //injectHead();
  injectHeader(index);
  injectFooter();
}

/*function injectHead() {
  var target = document.getElementsByTagName("head")[0];
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    target.innerHTML = this.responseText;
  };
  xhttp.open("GET", "head.html", true);
  xhttp.send();
}*/

function injectHeader(index) {
  var target = document.getElementById("fejlec");
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    target.innerHTML = this.responseText;
    target.getElementsByTagName("td")[index].className = "active";
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

function injectImages(index, names) {
  var root = document.getElementsByClassName("kepek")[index];
  for (i = 0; i < names.length; i++) {
    var imgtag = document.createElement("img");
    imgtag.setAttribute("src", names[i]);
    imgtag.setAttribute("alt", "Hiba a kép betöltése közben");
    var div = document.createElement("div");
    div.appendChild(imgtag);
    root.appendChild(div);
  }
}