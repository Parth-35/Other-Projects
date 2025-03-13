let gameSeq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// game start
document.addEventListener("keypress", function () {
    if(started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 100);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 100);
}

//game flashes automatic
function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if(userseq[idx] === gameSeq[idx]) {
        if(userseq.length == gameSeq.length) {
            setTimeout(levelUp(), 1000);
        }
    } else {
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        })
        reset();
    }
}

// User manually flashes
function btnPress() {
    let btn = this;
    userFlash(btn);
    userseq.push(this.id);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userseq = [];
    level = 0;
}
