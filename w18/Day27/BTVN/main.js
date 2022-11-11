let numberDays = document.querySelector(".number-days")
let numberHours = document.querySelector(".number-hours")
let numberMinutes = document.querySelector(".number-minutes")
let numberSeconds = document.querySelector(".number-seconds")

function time() {
    let year2022 = new Date("01:01:2022")
    let now = Date.now()
    let timeLeft = year2022.getTime() - now
    let days = Math.floor(timeLeft / 86400000)
    let hours = Math.floor((timeLeft - days * 86400000) / 3600000)
    let minutes = Math.floor((timeLeft - days * 86400000 - hours * 3600000) / 60000)
    let seconds = Math.floor((timeLeft - days * 86400000 - hours * 3600000 - minutes * 60000) / 1000)

    numberDays.textContent = days
    numberHours.textContent = hours
    numberMinutes.textContent = minutes
    numberSeconds.textContent = seconds
}

setInterval(time, 10)

