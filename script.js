$(document).ready(function() {$('.change').on('change', function(e) {
	
		// Stop the form from sending and reloading the page
		e.preventDefault();
		$('#error').html("");

		// Find the players
		var player1 = findPlayers(1);
		var player2 = findPlayers(2);
		console.log(player1,player2);
		generateScorecard(player1,player2);		
	});
	});




// store username given via input
function findPlayers(num) {

		var player;
		var id = "player"+num;
		console.log(id);
		// Get the player value from the form dropdown
		player = document.getElementById(id).value;
		
		console.log(player);
		
		return player;		
}


// generate scorecards
function generateScorecard(player1,player2) {
	$('.player1').html('<iframe src="http://labs.tageswoche.ch/scorecards/scorecard.html?spieler=' + player1 + '" width="330" height="620" frameborder="0"></iframe>');
	$('.player2').html('<iframe src="http://labs.tageswoche.ch/scorecards/scorecard.html?spieler=' + player2 + '" width="330" height="620" frameborder="0"></iframe>');
	
}
