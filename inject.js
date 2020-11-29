function injectCommon(index) {
  //injectHead();
  injectHeader(index);
  injectFooter();
}

// Gondolkoztam azon hogy a head egy részét szintén importálom hogy ne kelljen mind a 4 html-ben módosítani, de inkább nem matattam
/*function injectHead() {
  var target = document.getElementsByTagName("head")[0];
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    target.innerHTML = this.responseText;
  };
  xhttp.open("GET", "head.html", true);
  xhttp.send();
}*/

// Betölti a header.html tartalmát, majd belinjektálja a <fejlec id-jű divbe>, valamint a táblázat (fülek) adott elemére beállítja az aktiv class-t és kikapcsolja a továbbítás
function injectHeader(index) {
  var target = document.getElementById("fejlec");
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    target.innerHTML = this.responseText;
    target.getElementsByTagName("td")[index].className = "aktiv";
    target.getElementsByTagName("td")[index].removeAttribute("onclick");
  };
  xhttp.open("GET", "header.html", true);
  xhttp.send();
}

// Betölti a footer.html tartalmát, majd belinjektálja a <lablec id-jű divbe>
function injectFooter() {
  var target = document.getElementById("lablec");
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    target.innerHTML = this.responseText;
  };
  xhttp.open("GET", "footer.html", true);
  xhttp.send();
}

// Paraméterként kap egy indexet, fájlneveket és egy opcionális méret overrideot, megkeresi az index-edik kepek divet, majd hozzáadja a fájlnevek alapján a képeket
// A kép blokkok egy divből, és benne egy img-ből állnak, melyre megadható rem-ben egy méret. Az img-khez automatikusan hozzáadja, hogy kattintás esetén új lapon megnyíljanak
function injectImages(index, names, sizeoverride = null) {
  var root = document.getElementsByClassName("kepek")[index];
  for (i = 0; i < names.length; i++) {
    var imgtag = document.createElement("img");
    imgtag.setAttribute("src", "img/" + names[i]);
    imgtag.setAttribute("alt", "Hiba a kép betöltése közben (img/" + names[i] + ")");
    imgtag.setAttribute("onclick", "window.open('img/" + names[i] + "', '_blank')");
    var div = document.createElement("div");
    if (sizeoverride) {
      div.setAttribute("style", "height: " + sizeoverride + "rem");
    }
    div.appendChild(imgtag);
    root.appendChild(div);
  }
}