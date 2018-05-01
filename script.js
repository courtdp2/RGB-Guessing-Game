let numSquares = 6;
let colors = [];
let pickedColor;

let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#messageDisplay");
let resetBtn = document.querySelector("#reset");
let modeBtns = document.querySelectorAll(".mode");

init();

function init() {
    // mode buttons event listeners
    setModeBtns();
    setSquares();
    reset();
}

function setModeBtns() {
    for (let i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function () {
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setSquares() {
    for (let i = 0; i < squares.length; i++) {
        // add click listeners to squares
        squares[i].addEventListener("click", function () {
            // get color of clicked square
            let clickedColor = this.style.backgroundColor;
            // compare color to picked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetBtn.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}

function reset() {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from the array
    pickedColor = pickColor();
    // change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors"
    messageDisplay.textContent = "";
    // change color of squares
    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "#4682b4";
}

resetBtn.addEventListener("click", function () {
    reset();
});

function changeColors(color) {
    //loop through all sqaures
    for (let i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array 
    let arr = []
    // repeat num times
    for (let i = 0; i < num; i++) {
        // get random color and push into array
        arr.push(randomColor());
    }
    // return the array
    return arr;
}

function randomColor() {
    // pick a "red from  0 - 255"
    let r = Math.floor(Math.random() * 256);
    // pick a "green from  0 - 255"
    let g = Math.floor(Math.random() * 256);
    // pick a "blue from  0 - 255"
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
