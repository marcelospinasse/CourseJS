var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
	var ourRequest = new XMLHttpRequest();
	ourRequest.open(
		"GET",
		"https://learnwebcode.github.io/json-example/animals-" +
			pageCounter +
			".json"
	);
	ourRequest.onload = function () {
		if (ourRequest.status >= 200 && ourRequest.status < 400) {
			var ourData = JSON.parse(ourRequest.responseText);
			renderHTML(ourData);
		} else {
			console.log("We connected to the server, but it returned an error.");
		}
	};

	ourRequest.onerror = function () {
		console.log("Connection error");
	};

	ourRequest.send();
	pageCounter++;
	if (pageCounter > 3) {
		btn.classList.add("hideMe");
	}
});

function renderHTML(data) {
	var htmlString = "";

	for (i = 0; i < data.length; i++) {
		htmlString +=
			"<p>" + data[i].name + " is a " + data[i].species + " that likes to eat "; //fecha aqui...

		for (ii = 0; ii < data[i].foods.likes.length; ii++) {
			if (ii == 0) {
				htmlString += data[i].foods.likes[ii];
			} else {
				htmlString += " and " + data[i].foods.likes[ii];
			}
		}

		htmlString += " and dislikes ";

		for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
			if (ii == 0) {
				htmlString += data[i].foods.dislikes[ii];
			} else {
				htmlString += " and " + data[i].foods.dislikes[ii];
			}
		}

		htmlString += ".</p>"; // e concatena aqui.
	}

	animalContainer.insertAdjacentHTML("beforeend", htmlString);
}

//cordenadas do mouse

var logo = document.getElementsByClassName("svg-image");
function showCoords(event) {
	var x = event.clientX;
	var y = event.clientY;
	var coords = "X coords: " + x + ", Y coords: " + y;
	document.getElementById("demo").innerHTML = coords;
	var logoColor = `#${x}${y}`;

	return `#${x}${y}`;
}

document.getElementById("myDiv").onmousemove = function () {
	//Set random background color
	//   myDiv.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
	this.onmousemove = function (e) {
		var x = e.clientX;
		var y = e.clientY;
		console.log(`#${x}${y}`);
        myDiv.style.backgroundColor = `#${x}${y}`
	};
};

// document.getElementById("myDiv").onmousemove = function() {
//   //Set random background color
//   myDiv.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
// }
