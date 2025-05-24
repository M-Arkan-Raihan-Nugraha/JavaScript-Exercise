const divJam = document.querySelector("#jam")
const divMenit = document.querySelector("#menit")
const divDetik = document.querySelector("#detik")
let jam = Number(divJam.textContent)
let menit = Number(divMenit.textContent)
let detik = Number(divDetik.textContent)
let mulai = false
let lapNumber = 1
const startBtn = document.querySelector("#start-btn")
const stopBtn = document.querySelector("#stop-btn")
const resetBtn = document.querySelector("#reset-btn")
const lapBtn = document.querySelector("#lap-btn")
const lapsContainer = document.querySelector("#laps")

const changeJam = () => {
    detik++
    if (detik == 60) {
        menit++
        detik = 0
    }
    if (menit == 60) {
        jam++
        menit = 0
    }
    divJam.textContent = jam < 10 ? `0${jam}` : jam
    divMenit.textContent = menit < 10 ? `0${menit}` : menit
    divDetik.textContent = detik < 10 ? `0${detik}` : detik
}

startBtn.addEventListener("click", function() {
    mulai = setInterval(changeJam, 1)
})
stopBtn.addEventListener("click", function() {
    clearInterval(mulai)
})
resetBtn.addEventListener("click", function() {
    location.reload()
})
lapBtn.addEventListener("click", function() {
    const lapItem = document.createElement("div")
    lapItem.textContent = `Lap ${lapNumber}: ${divJam.textContent}:${divMenit.textContent}:${divDetik.textContent}`
    lapsContainer.appendChild(lapItem)
    lapNumber++
});