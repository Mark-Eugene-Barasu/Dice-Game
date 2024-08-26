
let randomNumber1 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber1);

let leftDice = document.querySelector("#img1");

let imageSources = [
    `./images/dice1.png`,
    `./images/dice2.png`,
    `./images/dice3.png`,
    `./images/dice4.png`,
    `./images/dice5.png`,
    `./images/dice6.png`,
];

leftDice.setAttribute(`src`, imageSources[randomNumber1 - 1]);