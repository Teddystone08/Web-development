
let score = {
    win: 0,
    loose: 0,
    tie: 0
    
};

function robotMove(){
    const randomNumber = Math.random();
   
    let machineMove = '';

    if(randomNumber >= 0 && randomNumber < 1/5){
        machineMove = 'rock';
    }else if (randomNumber >= 1/5 && randomNumber < 1/2){
        machineMove = 'paper';
    }else if (randomNumber >= 1/2 && randomNumber < 2){
        machineMove = 'scissor'
    }
    return machineMove;
}


function getGamePick(player){

    const playerMove = robotMove();


    let results = '';

    if (player === 'rock'){

        if (playerMove === 'rock'){
            results = 'You loose';
        }else if(playerMove === 'paper'){
            results = 'You tie';
        }else if (playerMove === 'scissor'){
            results = 'You win';
        }
    }else if (player === 'paper') {
        if (playerMove === 'rock') {
            results = 'You win';
        }else if(playerMove === 'paper') {
            results = 'You tie';
        }else if (playerMove === 'scissor'){
            results === 'You loose';
        }

    }else if(player === 'scissor') {

        if (playerMove === 'rock'){
            results = 'You win';
        }else if(playerMove === 'paper'){
            results = 'You loose';
        }else if (playerMove === 'scissor'){
            results = 'You tie';
        }
    }

        if (results === 'You win') {
            score.win += 1;
        }else if (results === 'You loose'){
            score.loose += 1;
        }else if (results === 'You tie') {
            score.tie += 1;
        }

        

   
}

 document.querySelector('.display')
    .innerHTML= results
    
    //`You picked scissor, robot picked ${machineMove}, ${playerMove}`;
    
