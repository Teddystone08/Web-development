
maxLimit = 100
const btnEl = document.querySelector('.btn')
const lotto = Math.floor(Math.random() * maxLimit);


let draw = [];

btnEl.addEventListener('click',() => {
if (lotto > 0 || lotto < 100){
    lotto.push = draw.length;
    console.log(draw)
}
    
});




//console.log(lotto)

