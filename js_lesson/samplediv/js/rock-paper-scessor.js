let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    tie: 0,  
};






/*if (!score){
    score = {
        win: 0,
        lose: 0,
        tie: 0,
    }
}*/

function playGame(playerMove) {

    const computerMove = pickComputerMover();

    let result = '';

    if(playerMove === 'scissors'){

    if (computerMove === 'rock') {
        result = 'Yow lose';
    }else if( computerMove === 'paper'){
        result = 'You win.';
    }else if(computerMove === 'scissors'){
        result = 'Tie.';
    }

} else if (playerMove === 'paper')  {
    
        //let result = '';

    if(computerMove === 'rock'){
        result = 'Yow win';
    }else if( computerMove === 'paper'){
        result = 'You Tie.';
    }else if(computerMove === 'scissor'){
        result = 'You lose.';
    }

}  else if (playerMove === 'rock') {
           // let result = '';

    if(computerMove === 'rock'){
        result = 'tie';
    }else if( computerMove === 'paper'){
        result = 'You lose.';
    }else if(computerMove === 'scissor'){
        result = 'You win.';
    }


    if (result === 'You win.'){
        score.win += 1;
    }else if(result === 'You lose.'){
        score.lose += 1;
    }else if(result === 'tie'){
        score.tie += 1;
    }

}     
 localStorage.setItem('score',JSON.stringify(score));


    document.querySelector('.result')
        .innerHTML= result;


    document.querySelector('.moves')
        .innerHTML= `You ${playerMove} - ${computerMove} computer`;

    //alert(`You picked ${playerMove}. computer picked ${computerMove}.${result}
   

};

function updateScoreEL() {
    document.querySelector('.note')
        .innerHTML = `wins: ${score.win}, losses: ${score.lose}, ties: ${score.lose}`;

}

updateScoreEL();




function pickComputerMover() {
    const randomNumber = Math.random();

           let computerMove = ''; 

if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
}else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper';
}else if (randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'scissor'
}

return computerMove;




}

