//Değişkenlerin Tanımlanması

var elSure = document.getElementById("Sure");
var elHoran = document.getElementById("Horan");
var Sure;

var elSinif = document.getElementById("Sinif");
var elBMaliyet = document.getElementById("BMaliyet");
var BMaliyet;
var Sinif;

var elAlan = document.getElementById("Alan");
var Alan;

var elYBMaliyet = document.getElementById("YBMaliyet");

//Sürenin Alınması ve textbox'a yazılması

elSure.addEventListener("change", function() {
Sure = elSure.options[elSure.selectedIndex].value;
elHoran.value = Sure
});

//Sınıfın Alınması ve Textbox'a yazılması

elSinif.addEventListener("change", function() {
Sinif = elSinif.options[elSinif.selectedIndex].value;
elBMaliyet.value = Sinif
BMaliyet = Sinif;
});


//Alanın Alınması

elAlan.addEventListener("blur", function() {
Alan = elAlan.value;


elYBMaliyet.value = (BMaliyet * Alan);
});

