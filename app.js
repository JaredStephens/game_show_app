// DECLARATIONS
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const missed = 0;
const startGame = document.getElementById("bnt_reset");
// RANDOM PHRASES
const phrasesArray = [
	"Its Clobberin Time",
	"By Odins Beard",
	"We have a Hulk",
	"Im the best at what I do",
	"Hulk Smash",
];
// START BUTOTN

// RANDOM PHRASE FUNCTION
function getRandomPhraseArray(phrasesArray) {
	return phrasesArray[Math.floor(Math.random() * phrasesArray.length)];
}
