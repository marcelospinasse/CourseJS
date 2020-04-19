const square = document.querySelectorAll(".square");
const mule = document.querySelectorAll(".mule");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;

function randonSquare() {
	square.forEach((className) => {
		className.classList.remove("mule");
	});
	let randonPosition = square[Math.floor(Math.random() * 9)];
	randonPosition.classList.add("mule");

	hitPosition = randonPosition.id;
}

square.forEach((id) => {
	id.addEventListener("mouseup", () => {
		if (id.id === hitPosition) {
			result = result + 1;
			if (currentTime > 0) {
				score.textContent = result;
			}
		}
	});
});

function countDown() {
	currentTime--;
	timeLeft.textContent = currentTime;
	randonSquare();

	if (currentTime <= 0) {
		clearInterval(timer);
		alert("Fim! Sua pontuação final é " + result);
	}
}

let timer = setInterval(countDown, 800);
