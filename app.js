// DECLARATIONS
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
let missed = 0;
const startGame = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");
// RANDOM PHRASES
const phrasesArray = [
	"Its Clobberin Time",
	"By Odins Beard",
	"We have a Hulk",
	"Im the best at what I do",
	"Hulk Smash",
];
// HIDE OVERLAY
startGame.addEventListener("click", function () {
	overlay.style.display = "none";
});
// RANDOM PHRASE FUNCTION
function getRandomPhraseArray(arr) {
	return phrasesArray[Math.floor(Math.random() * arr.length)].split("");
}
