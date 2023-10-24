// JavaScript source code

function openNav() {
    document.getElementById("side_navbar").hidden = false;

}

function closeNav() {
    document.getElementById("side_navbar").hidden = true;
}

function reveal() {
    document.getElementByClassName("time-inputs").hidden = false;
}

let focusButton = document.getElementById("focus");
let buttons = document.querySelectorAll(".btn");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startButton = document.getElementById("btn-start");
let reset = document.getElementById("btn-reset");
let pause = document.getElementById("btn-pause");
let time = document.getElementById("time");
let set;
let count = 59;
let paused = true;
let minCount = 24;

time.textContent = `${minCount + 1}:00`;

function playSound() {
    let ding = new Audio('chime-sound-7143.mp3');
    ding.play;
};

const appendZero = (value) => {
    value = value < 10 ? `0${value}` : value;
    return value;
};

reset.addEventListener(
    "click",
    (resetTime = () => {
        pauseTimer();
        count = 59;
        minCount = 24;
        time.textContent = `${minCount + 1}:00`;
    })
);

const removeFocus = () => {
    buttons.forEach((btn) => {
        btn.classList.remove("btn-focus");
    })
};

focusButton.addEventListener("click", () => {
    removeFocus();
    focusButton.classList.add("btn-focus");
    pauseTimer();
    minCount = 24;
    count = 59;
    time.textContent = `${minCount + 1}:00`;
});

shortBreakButton.addEventListener("click", () => {
    removeFocus();
    shortBreakButton.classList.add("btn-focus");
    pauseTimer();
    minCount = 4;
    count = 59;
    time.textContent = `${appendZero(minCount + 1)}:00`;
});

longBreakButton.addEventListener("click", () => {
    removeFocus();
    longBreakButton.classList.add("btn-focus");
    pauseTimer();
    minCount = 14;
    count = 59;
    time.textContent = `${minCount + 1}:00`;
});

pause.addEventListener(
    "click",
    (pauseTimer = () => {
        paused = true;
        clearInterval(set);
        startButton.classList.remove("hide");
        pause.classList.remove("show");
        reset.classList.remove("show");
    })
);

startButton.addEventListener("click", () => {
    reset.classList.add("show");
    pause.classList.add("show");
    startButton.classList.add("hide");
    startButton.classList.remove("show");
    if (paused) {
        paused = false;
        time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
        set = setInterval(() => {
            count--;
            time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
            if (count == 0) {
                if (minCount != 0) {
                    minCount--;
                    count = 60;
                } else {
                    clearInterval(set);
                    playSound();
                }
            }
        }, 1000);
    }
});