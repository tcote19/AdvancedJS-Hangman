
function BuildWords(query){
	this.guessedLetters = [];
	this.score = 0;
	this.live = 10;
	this.showing = '';
}
	this.Check = function(){
		this.score = 0;
		this.live = 0;
		for(var i = 0; i < word.lettersArray.length; i++){
			word.lettersArray[i].check(guess);
			if(word.lettersArray[i].show){
				this.score++;
			}
			if(word.lettersArray[i].letter != "" && guess != word.lettersArray[i].letter.toLowerCase()){
				this.checkCounter++;
			};
		};
	};

module.exports = {Words:Words};