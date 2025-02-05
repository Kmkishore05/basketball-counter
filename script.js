
let homeScore = document.getElementById("hscore");
let guestScore = document.getElementById("gscore");

function one() {
    homeScore.textContent = parseInt(homeScore.textContent) + 1;
}

function two(){
   homeScore.textContent = parseInt(homeScore.textContent) + 2;
}

function three(){
    homeScore.textContent = parseInt(homeScore.textContent) + 3;
}

function gone(){
    guestScore.textContent = parseInt(guestScore.textContent) + 1;
}

function gtwo(){
    guestScore.textContent = parseInt(guestScore.textContent) + 2;
}

function gthree(){
    guestScore.textContent = parseInt(guestScore.textContent) + 3;
}   

function gfoul(){
    guestScore.textContent = parseInt(guestScore.textContent) - 1;
}

function hfoul(){
    homeScore.textContent = parseInt(homeScore.textContent) - 1;
}