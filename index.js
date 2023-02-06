// document.getElementById("countText").innerText = 5;

//1get save-el paragraph and save in variable called saveel
//2create a variable that contains both the conunt and dash
//3 render the variable in the saveel using innerText
//nb make sure not to delete exisiting content of paragraph

// input from the user

let sum = 0;
let cards = [];

let showSum = document.getElementById("sum");
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("card");
let player = {
  name: "Per",
  chip: 460,
};

let playerEl = document.getElementById("user-el");
playerEl.textContent = player.name + ": $ " + player.chip;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (10 < randomCard) {
    return 10;
  } else {
    return randomCard;
  }
}

function startGame() {
  isAlive: true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  renderGame();
}
function renderGame() {
  showSum.textContent = sum;
  cardEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you wanna draw another card";
  } else if (sum === 21) {
    message = "Blackjack!";
  } else {
    message = "you are out";
    isAlive = false;
  }
  messageEl.innerText = message;
}

function newCard() {
  if (isAlive && sum !== 21) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
}
