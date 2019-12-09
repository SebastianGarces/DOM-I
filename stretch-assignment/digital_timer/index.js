const secondTens = document.querySelector("div#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const colon = document.querySelector("#colon");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");

//COUNTER
let count = 0;
const counter = () => (count += 1);

//TIME PASSED INTERVAL
let secondTensCounter = () => {
	return Math.floor(count / 1000)
		.toString()
		.split("")
		.pop();
};
let secondOnesCounter = () => {
	return Math.floor(count / 100)
		.toString()
		.split("")
		.pop();
};

let msHundredsCounter = () => {
	return Math.floor(count / 10)
		.toString()
		.split("")
		.pop();
};

let msTensCounter = () => {
	return (count / 1)
		.toString()
		.split("")
		.pop();
};

let timePassedID;

const timePassed = () => {
	timePassedID = setInterval(() => {
		counter();
		secondTens.textContent = secondTensCounter();
		secondOnes.textContent = secondOnesCounter();
		msHundreds.textContent = msHundredsCounter();
		msTens.textContent = msTensCounter();
		if (count === 1000) {
			pause();
			startBtn.disabled = true;
			pauseBtn.disabled = true;
			[secondTens, secondOnes, colon, msHundreds, msTens].forEach(
				item => (item.style.color = "white")
			);
		}
	}, 10);
};

//BUTTONS
const startBtn = document.querySelector(".start-btn");
const pauseBtn = document.querySelector(".pause-btn");
const resetBtn = document.querySelector(".reset-btn");

startBtn.addEventListener("click", () => {
	start();
});

pauseBtn.addEventListener("click", () => {
	pause();
});

resetBtn.addEventListener("click", () => {
	reset();
});

//ACTIONS
const start = () => {
	timePassed();
	startBtn.disabled = true;
	resetBtn.disabled = true;
	pauseBtn.disabled = false;
};

const pause = () => {
	clearInterval(timePassedID);
	startBtn.disabled = false;
	resetBtn.disabled = false;
	pauseBtn.disabled = true;
};

const reset = () => {
	secondTens.textContent = "0";
	secondOnes.textContent = "0";
	msHundreds.textContent = "0";
	msTens.textContent = "0";
	count = 0;
	startBtn.disabled = false;
	startBtn.disabled = false;
	[secondTens, secondOnes, colon, msHundreds, msTens].forEach(
		item => (item.style.color = "black")
	);
};
