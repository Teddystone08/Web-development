const ratingEls = document.querySelectorAll('.mood');
const btnEl = document.getElementById('btn')
const containerEls = document.getElementById('mood-container')

let selectedMood = "";

btnEl.addEventListener("click",() => {
    if (selectedMood == "") {
        containerEls.innerHTML = `
        
        <div class = "first">
        <strong>Thank you</strong>
        </div>
        
        <div class = "msg">
        <strong>Feedback: ${selectedMood}</strong>
        </div>

        <p>We'll use your feedback to improve our customer support.</p>`

    }

});


function removeActive(){
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove('active');
    });
}
