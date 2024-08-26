// get a random number between 1 - 6
let randomNumber1 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber1);

// get a second number between 1 - 6
let randomNumber2 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber1);

// selecting the image from the HTML file respectively
let leftDice = document.querySelector(".img1");
let rightDice = document.querySelector(".img2");


// changing the images using the src (source) attribute
leftDice.setAttribute(`src`, `./images/dice${randomNumber1}.png`);
rightDice.setAttribute(`src`, `./images/dice${randomNumber2}.png`);

// to change the h1 text to display which one won
let output = document.querySelector(`h1`);

// to check the winner using "if else"
if( randomNumber1 > randomNumber2){
    output.innerText =  `Player 1 won`;
} else if ( randomNumber2 > randomNumber1){
    output.innerText = `Player 2 won`;
} else {
    output.innerText = `It's a draw`;
}





