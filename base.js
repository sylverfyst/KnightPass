window.onload = function {
	document.getElementById("start").onclick=function() {
		location = DetermineIfExists();
		location.href=location;
		if(localStorage.getItem("player1") === null) {
			window.localstorage.removeItem("player2");
			var player1 = new Player();
			var serial1 = player1.serialize();
			var player2 = new Player();
			player2.setweapon(Math.floor(Math.random() * (3 - 0)) + 0);
			player2.generateStats(player2.getweapon());
			var serial2 = player2.serialize();
			window.localstorage.setItem("player1", serial1);
			window.localstorage.setItem("player2", serial2);
			location.href="http://knightpass-app.com/character-select.html";
		}
		else {
			window.localstorage.removeItem("player2");
			var player2 = new Player();
			player2.setweapon(Math.floor(Math.random() * (3 - 0)) + 0);
			player2.generateStats(player2.getweapon());
			var serial2 = player2.serialize();
			window.localstorage.setItem("player2", serial2);
			location.href="http://knightpass-app.com/character-stats.html";
		}
	};
}