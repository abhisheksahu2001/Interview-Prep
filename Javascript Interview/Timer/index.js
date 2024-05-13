const startButton = document.getElementById("start_btn")
const stopButton = document.getElementById("stop_btn")
const ResetButton = document.getElementById("reset_btn")
const hourInput = document.getElementById("hrInput")
const minuteInput = document.getElementById("minInput")
const secondInput = document.getElementById("secInput")

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);


let timerId = ""

function startTimer() {
    if (hourInput.value == 0 && secondInput.value == 0 && minuteInput.value == 0) return;
    startButton.style.display = "none"
    stopButton.style.display = "block"
    timerId = setInterval(() => {
        updateTime()
    }, 1000)
}

function updateTime() {
    if (secondInput.value > 0) {
        secondInput.value -= 1;
    }
    else if (minuteInput.value > 0 && secondInput.value == 0) {
        minuteInput.value -= 1;
        secondInput.value = 59;
    }
    else if (hourInput.value > 0 && minuteInput.value == 0) {
        minuteInput.value = 59;
        secondInput.value = 60;
        hourInput.value -= 1;
    }
    if (secondInput.value == 0 && minuteInput.value == 0 && hourInput.value == 0) {
        stopTimer()
    }
}
function stopTimer() {
    stopButton.style.display = "none"
    startButton.style.display = "block"
    clearInterval(timerId)
}