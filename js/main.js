"use strict";

document.getElementById("btn").addEventListener("click", calculateInterests);

function calculateInterests() {

	var ko = parseFloat(document.getElementById("wplata").value);
	
	var r = parseFloat(document.getElementById("stopa").value) / 100;

	var e = document.getElementById("kapitalizacja");
	var m = e.options[e.selectedIndex].value;

	var n = parseInt(document.getElementById("lata").value);

	var potega = n * m;

	var wynik1 = 1 + (r / m);

	var wynik2 = Math.pow(wynik1, potega);

	var wynik3 = ko * wynik2;

	if (document.getElementById("podatek").checked) {
		var podatekBelki = (wynik3 - ((wynik3 - ko) * 0.19));
		var wynikBelka = parseFloat(podatekBelki).toFixed(2);
		document.getElementById("wynik").innerHTML = wynikBelka;
	} else {
		var wynikBezBelki = parseFloat(wynik3).toFixed(2);
		document.getElementById("wynik").innerHTML = wynikBezBelki;
	}
}