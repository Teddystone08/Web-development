
let messageEL = document.querySelector(".message-el")

 messageEL.textContent = "Want to play around?"

 let message = "";


let cards = []
let hasBackJack = false
let isAlive = false


let cardsEl = document.querySelector('.card-el')
let sumEl = document.querySelector('.sum-el')

let player = {
    name: "Teddy",
    chip: 100
}

let playerEl = document.getElementById('player-el')

let score = player.name + " :" + player.chip

playerEl.textContent = score

function getRandomCards(){
    let randomNuber = Math.floor(Math.random()*13) + 1;
    if (randomNuber > 10){
        return 10
    }else if (randomNuber === 1){
        return 11
    }else{
        return randomNuber

    }
   
}

function startGame(){
    isAlive = true
    firstCard = getRandomCards();
    secondCard = getRandomCards();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}



function renderGame(){
    sumEl.textContent = "Sum: "+ sum
    cardsEl.textContent = "Card:"
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    
    if (sum <= 20){
        message = "Do you want to draw and new Card?"
    } else if (sum === 21){
        message ="You got a Blackjack"
        hasBackJack = true
    } else{
        message ="You are out of the game"
        isAlive = false
    }

    messageEL.textContent = message

}

function newCard(){ 
    
    if (isAlive === true && hasBackJack === false){

        let newCard = getRandomCards();

        sum += newCard

        cards.push(newCard) 

        renderGame();



    }

    
}
