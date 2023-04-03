//seletores
let difitalEl = document.querySelector(".digital");
let sEl = document.querySelector('.p_s');
let mEl = document.querySelector('.p_m');
let hEl = document.querySelector('.p_h');

//atualização do releogio 



function updateClock() {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    difitalEl.innerHTML = `${fixTime(hours)}:${fixTime(minutes)}:${fixTime(seconds)}`;

    //essa variavel é resposnavel por atualizar o ponteiro de acordo com os segundos e graus
    let sDeg = (360/60 * seconds) -90
    let mDeg = (360/60 * minutes) -90
    let hDeg = (360/12 * hours) -90
    // o ponteiro gira de acorda com o angulo no css 
    sEl.style.transform = `rotate(${sDeg}deg)`
    mEl.style.transform = `rotate(${mDeg}deg)`
    hEl.style.transform = `rotate(${hDeg}deg)`

}

function fixTime(zero) {

    return zero <10 ? '0'+zero : zero;
}

setInterval(updateClock, 1000);