"use strict";

document.getElementById("btn").addEventListener("click", calculateInterests);

function calculateInterests() {
	
	var ko = document.getElementById("wplata").value;
	var r = document.getElementById("stopa").value/100;
	
	var e = document.getElementById("kapitalizacja");
	var m = e.options[e.selectedIndex].value;
	
	var n = document.getElementById("lata").value;
	
	var potega = n * m;
	
	var wynik1 = 1+(r/m);
	
	var wynik2 = Math.pow(wynik1, potega);
	
	var wynik3 = ko * wynik2;
	
	if (document.getElementById("podatek").checked){
		var podatekBelki = wynik3 - (wynik3*0.19);
		console.log(podatekBelki);
	} else {
		console.log(wynik3);
	}
	
	
}

//calculateInterests();