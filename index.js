let homeScore = document.getElementById("homescore")
let score = Number(homeScore.textContent)

function addone() {
    score += 1
    homeScore.textContent = score
}

function addtwo() {
    score += 2
    homeScore.textContent = score
}

function addthree() {
    score += 2
    homeScore.textContent = score
}

let guestScore = document.getElementById("guestscore")
let gscore = Number(guestScore.textContent)

function gaddone() {
    gscore += 1
    guestScore.textContent = gscore
}

function gaddtwo() {
    gscore += 2
    guestScore.textContent = gscore
}

function gaddthree() {
    gscore += 2
    guestScore.textContent = gscore
}

function newGame() {
    gscore=0;
    score=0;
    guestScore.textContent = 0
    homeScore.textContent = 0
}