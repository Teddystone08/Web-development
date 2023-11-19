const outputEl = document.getElementById('count');
const noticeOut = document.getElementById('outSave');

let count = 0;

function increase() {
    count += 1
    outputEl.innerHTML = count;
}

function Save() {
    let countOut = count + " - "

    noticeOut.textContent += countOut;

    outputEl.innerHTML = 0
    count = 0;

}

const countBtn = document.getElementById('cntBnt')
const saveBtn = document.getElementById('btnSav')

countBtn.addEventListener('click', () => {
    increase();
})

saveBtn.addEventListener(('click'), () => {
    Save();
})
