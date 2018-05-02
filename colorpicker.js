var numsquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
//elements
var rgbtext = document.querySelector("#rgbtext");
var resetbtn = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupSquares();
	setupModeButtons();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numsquares = 3: numsquares = 6;
			reset();
		});
	}
}
function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
				message.textContent = "Correct!";
				resetbtn.textContent = "Play again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				message.textContent = "Try again"
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numsquares);
	pickedColor = pickColor();
	rgbtext.textContent = pickedColor;
	resetbtn.textContent = "New Colors";
	message.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetbtn.addEventListener("click", reset);

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var rand = Math.floor(Math.random() * colors.length);
	return colors[rand];
}

function generateRandomColors(num){
	var arr = []
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

