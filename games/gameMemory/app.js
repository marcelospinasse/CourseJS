document.addEventListener("DOMContentLoaded", () => {
	//card options
	const cardArray = [
		{
			name: "mateo",
			img: "images/mateo.png",
		},
		{
			name: "marcela",
			img: "images/marcela.png",
		},
		{
			name: "micaela",
			img: "images/micaela.png",
		},
		{
			name: "emanuela",
			img: "images/emanuela.png",
		},
		{
			name: "vitoria",
			img: "images/vitoria.png",
		},
		{
			name: "lucca",
			img: "images/lucca.png",
		},
		{
			name: "mateo",
			img: "images/mateo.png",
		},
		{
			name: "marcela",
			img: "images/marcela.png",
		},
		{
			name: "micaela",
			img: "images/micaela.png",
		},
		{
			name: "emanuela",
			img: "images/emanuela.png",
		},
		{
			name: "vitoria",
			img: "images/vitoria.png",
		},
		{
			name: "lucca",
			img: "images/lucca.png",
		},
		{
			name: "mariana",
			img: "images/mariana.png",
		},
		{
			name: "mariana",
			img: "images/mariana.png",
		},
		{
			name: "giovani",
			img: "images/giovani.png",
		},
		{
			name: "giovani",
			img: "images/giovani.png",
		},
	];

	cardArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector(".grid");
	const resultDisplay = document.querySelector("#result");
	var cardsChosen = [];
	var cardsChosenId = [];
	var cardsWon = [];

	//create your board
	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			var card = document.createElement("img");
			card.setAttribute("src", "images/blueback.png");
			card.setAttribute("data-id", i);
			card.addEventListener("click", flipcard);
			grid.appendChild(card);
		}
	}

	//check for matches
	function checkForMatch() {
		var cards = document.querySelectorAll("img");
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];
		if (cardsChosen[0] === cardsChosen[1]) {
			// alert("Você conseguiu um match!!!");
			// cards[optionOneId].setAttribute("src", "images/white.png");
			// cards[optionTwoId].setAttribute("src", "images/white.png");
			cardsWon.push(cardsChosen);
		} else {
			cards[optionOneId].setAttribute("src", "images/blueback.png");
			cards[optionTwoId].setAttribute("src", "images/blueback.png");
			// alert("Desculpa, tente novamente!");
		}
		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if (cardsWon.length === cardArray / length / 2) {
			resultDisplay.textContent = "Parabéns!!!";
		}
	}

	//flip your card
	function flipcard() {
		var cardId = this.getAttribute("data-id");
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute("src", cardArray[cardId].img);
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	createBoard();
});
