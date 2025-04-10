const btn = document.getElementById('btn');
const text = document.getElementById('color');
const bodyColor = document.getElementById('body');

btn.addEventListener('click', function(){
	const randomColor = generateRandomHex();
	bodyColor.style.backgroundColor = randomColor;
	text.textContent = randomColor;
})

function generateRandomHex() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

bodyColor.style.backgroundColor = '#ffffff';
text.textContent = '#ffffff';