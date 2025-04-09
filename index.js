const btn = document.getElementById('btn');
const text = document.getElementById('color');
const bodyColor = document.getElementById('body');

const colors = ["red", "green", "blue"];

btn.addEventListener('click', function(){
	bodyColor.style.backgroundColor = generateRandomHex();
	text.innerText = bodyColor.style.backgroundColor;
})

function generateRandomHex() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}