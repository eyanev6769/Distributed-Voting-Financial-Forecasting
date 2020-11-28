<!DOCTYPE html>
<html lang="bg">

<head>
<meta charset="UTF-8">
<meta name="author" content="Тодор Балабанов">
<meta name="keywords" content="финансово прогнозиране, FOREX, система за гласуване">
<meta name="description" content="Разпределена система за финансово прогнозиране, чрез гласуване на множество потребители.">

<title>Distributed Voting Financial Forecasting</title>

<link rel="stylesheet" href="style.css">
<script src="code.js"></script>
</head>

<body onload="loadCurrencyPairs();selectCurrencyPairs();selectUser();">
<h1>Distributed Voting Financial Forecasting</h1>

<div class="container">
	<div>
		<!-- Зона за показване на вече изчислени прогнози. --->
	</div>
	<div class="voting_form">
		<!-- TODO Идентификатора на потребителя да се взема от базата данни при поискване на страницата. -->
		<input type="hidden" id="user_hash" name="user_hash" value="">
		<input type="hidden" id="user_email" name="user_email" value="">
		<!-- TODO Валутите трябва да се попълнят от базата данни. -->
		<p>
		Какво е вашето очакване за промяната на курса
		<select id="currency_pair" name="currency_pair" onchange="storeSelectedCurrencyPair()">
		</select>
		?
		</p>
		<br/>
		<div class="center">
		<button id="vote_up" name="vote" value="up" onclick="sendVote('up');">Увеличение</button> 
		<button id="vote_down" name="vote" value="down" onclick="sendVote('down');">Намаление</button>
		</div>
	</div>
</div>
<footer>
&copy; 2020 "Информационно обслужване" АД
</footer>
</body>
</html>

