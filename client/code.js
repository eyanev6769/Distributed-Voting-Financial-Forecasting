/**
 */
function loadCurrencyPairs() {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if(this.readyState != 4) {
			return;
		}
		
		if(this.status != 200) {
			return;
		}

		var select = document.getElementById("currency_pair");
		for(value of JSON.parse( this.responseText )){
			var option = document.createElement('option')
		
			option.value = value["ticker"];
			option.innerHTML = value["pair"];
		
			select.appendChild(option);
		}
	}
	
	xhttp.open("GET", "currency_pair_list.php", true);
	xhttp.send();
}

function loadForecast(currencyPair) {
	//TODO Load already calculated forecast.
}

function storeSelectedCurrencyPair() {
	document.cookie = "ticker=" + document.getElementById("currency_pair").value;
}

function selectCurrencyPairs() {
	//alert(document.cookie);
	//TODO document.getElementById("currency_pair").value = ;
}

function selectUser() {
}

function sendVote(direction) {
	if(direction!=="up" && direction!=="down") {
		return;
	}

	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if(this.readyState != 4) {
			return;
		}
		
		if(this.status != 200) {
			return;
		}

		//TODO Да се визуализитра за коя валутна двойка е бил гласът и в коя посока.
		window.alert("Voting was done ..."+this.responseText);
	}
	
	var ticker = document.getElementById("currency_pair").value;
	var userHash = document.getElementById("user_hash").value;
	var userEmail = document.getElementById("user_email").value;

	xhttp.open("GET", "accept_vote.php?ticker="+ticker+"&vote="+direction+"&user_hash=userHash"+"&user_email=userEmail", true);
	xhttp.send();
}