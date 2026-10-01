const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const baliseLeftArrow = document.querySelector(".arrow_left");
const baliseRightArrow = document.querySelector(".arrow_right");
const dots = document.querySelector (".dots")

let bannerImageIndex = 0

for (let i=0; i < slides.length; i++) {
	let dot = document.createElement("span");
	dot.classList.add("dot")
	dots.appendChild(dot);
}

let dotUnselected = document.getElementsByClassName ("dot")

let bannerImageShown = document.querySelector (".banner-img")

let tagLineText = document.querySelector ("#banner p");