var words = ["brooklyn", "chicago", "manhattan", "portland", "boston", "nashville", "seattle", "austin"];
var word = words[Math.floor(Math.random()*words.length)];
var answerArray = [];
var lives = 10;
var userLives = document.getElementById('userLives');
var remainingLetters="word.length";
var targetContainer = document.getElementById('word')

	for (var i = 0; i < word.length; i++) {
		answerArray[i] = "_";
	}

function play() {
	lives = 10;	
	userLives.innerHTML = "You have " + lives + " left.";
	
	for (var i = 0; i < word.length; i++) {
		answerArray[i] = "_";
	}

	targetContainer.innerHTML = answerArray.join(" ");

	document.onkeyup = function () {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		
		var validAnswer =false;

		if (userGuess.length !== 1) {
			return;
		} 
		else {
			for (var j = 0; j < word.length; j++) {
				if (word[j] === userGuess) {
					answerArray[j] = userGuess;
					remainingLetters--;
					validAnswer = true;
				} 
			}
				
			 if(validAnswer === false) {
			 	lives--;
			 	userLives.innerHTML = "You have " + lives + " left.";
			 }
			 if (lives === 0 ) {
			 	document.onkeyup = null;
			 }
		}

		targetContainer.innerHTML = answerArray.join(" ");

	}

}
	play();

document.getElementById("reset").onclick = play;
