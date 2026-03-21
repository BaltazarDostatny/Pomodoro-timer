console.log("Js funcionando");

const buttons = document.querySelectorAll("button");
const timer = document.querySelector("h1");

let stopTimer;
let typeBreak;
let min = 0;
let sec = 0;

buttons.forEach(button => {
    button.addEventListener("click", event => {
        switch(event.target.innerText) {
            case "Pomodoro":
                pomodoro();
                break;

            case "Short Break":
                shortBreak();
                break;

            case "Long Break":
                longBreak();
                break;

            case "START":
                startTimer();
                break;

            case "PAUSE":
                pauseTimer();
                break;

            case "RESET":
                resetTimer();
                break;
        };
    });
});

function pomodoro() {
    pauseTimer();
    typeBreak = "Pomodoro";

    min = 15;
    sec = 0;

    timer.innerText = String(min).padStart(2, "") + ":" + String(sec).padStart(2, "0");
};

function shortBreak() {
    pauseTimer();
    typeBreak = "ShortBreak";

    min = 5;
    sec = 0;

    timer.innerText = String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
};

function longBreak() {
    pauseTimer();
    typeBreak = "LongBreak";

    min = 25;
    sec = 0;

    timer.innerText = String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
};

function startTimer() {
    buttons[3].innerText = "PAUSE";

    stopTimer = setInterval(() => {
        console.log("Running");

        if(sec == 0 && min > 0) {
            min--;
            sec = 59;
            
            timer.innerText = String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
        } else

        if(min >= 0 && sec > 0) {
            sec--;
            timer.innerText = String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
        } else {pauseTimer()};
    }, 1000);
};

function pauseTimer() {
    clearInterval(stopTimer);
    buttons[3].innerText = "START";
};

function resetTimer() {
    pauseTimer();

    switch(typeBreak) {
        case "Pomodoro":
            pomodoro();
            break;

        case "ShortBreak":
            shortBreak();
            break;

        case "LongBreak":
            longBreak();
            break;
    };
};

longBreak();
