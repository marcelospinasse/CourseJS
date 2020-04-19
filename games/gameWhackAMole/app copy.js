const square = document.querySelectorAll(".square");
const mule = document.querySelectorAll(".mule");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;

function randonSquare() {
	square.forEach((className) => {
		className.classList.remove("mule");
		// console.log("mule");
	});
	let randonPosition = square[Math.floor(Math.random() * 9)];
	// console.log(randonPosition);
	randonPosition.classList.add("mule");

	//assign the id of the randonPosition to hitPosition for us do use later
	hitPosition = randonPosition.id;
}

square.forEach((id) => {
	id.addEventListener("mouseup", () => {
		if (id.id === hitPosition) {
			result = result + 1;
			score.textContent = result;
		}
	});
});

function moveMole() {
	let timerId = "";
	timerId = setInterval(randonSquare, 1000);
}

moveMole();

let timer = setInterval(countDown, 1000);

function countDown() {
	currentTime--;
	timeLeft.textContent = currentTime;

	if (currentTime <= 0) {
		clearInterval(timer);
		timerId = "";
		alert("Fim! Sua pontuação final é " + result);
	}
}
