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
randomPhrase = getRandomPhraseArray(phrasesArray);

//GAME DISPLAY
function addPhraseToDisplay(arr) {
	for (i = 0; i < arr.length; i++) {
		let li = document.createElement("li");
		li.textContent = arr[i].toLowerCase();
		phrase.appendChild(li);
		if (li.textContent !== " ") {
			li.className = "letter";
		} else {
			li.className = "space";
		}
	}
}
addPhraseToDisplay(randomPhrase);

// CHECK LETTER FUNCTION
function checkLetter(button) {
	const letter = document.querySelectorAll(".letter");
	let letterFound = null;
	for (i = 0; i < letter.length; i++) {
		if (button === letter[i].textContent.toLowerCase()) {
			letter[i].classList.add("show");
			letter[i].style.transition = "0.5s ease-in";
			letterFound = true;
		}
	}
	return letterFound;
}

// KEYBOARD
qwerty.addEventListener("click", (e) => {
	if (e.target.tagName === "BUTTON") {
		e.target.className = "chosen";
		e.target.disabled = true;
		const match = checkLetter(e.target.textContent.toLowerCase());

		if (match === null) {
			missed++;
			const lostLife = 5 - missed;
			const lives = document.querySelectorAll("img");
			lives[lostLife].setAttribute("src", "images/lostHeart.png");
		}
		checkWin();
	}
});

// CHECKWIN
function checkWin() {
	const letter = document.querySelectorAll(".letter");
	const show = document.querySelectorAll(".show");

	if (letter.length === show.length) {
		overlay.className = "win";
		title.textContent = "You won!";
		overlay.style.display = "flex";
	} else if (missed >= 5) {
		overlay.className = "lose";
		title.textContent = "You lost!";
		overlay.style.display = "flex";
	}
}
