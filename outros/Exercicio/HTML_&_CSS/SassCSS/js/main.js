const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn-burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const menuItem = document.querySelectorAll(".menu-nav-item");

menuBtn.addEventListener("click", toggleMenu);
let showMenu = false;
var num = 1;

function toggleMenu() {
	if (!showMenu) {
		hamburger.classList.add("open");
		nav.classList.add("open");
		menuNav.classList.add("open");
		menuItem.forEach((item) => item.classList.add("open"));
		menuItem.forEach((item) => {
			const delay = num * 0.07 + 0.15;
			item.style.transitionDelay = `${delay}s`;
			console.log(num);
			console.log(delay);
			num++;
		});
		showMenu = true;
		num = 1;
		} else {
		hamburger.classList.remove("open");
		nav.classList.remove("open");
		menuNav.classList.remove("open");
		menuItem.forEach((item) => item.classList.remove("open"));
		showMenu = false;
	}
	showMenu = false;
}
