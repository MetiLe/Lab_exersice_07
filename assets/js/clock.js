const hourHand = document.querySelector(".hour")
const secondsHand = document.querySelector(".sec")
const minutesHand = document.querySelector(".min")

setInterval(analogClockSimulation, 1000)

function analogClockSimulation(){
    let currentDate = new Date()
    let seconds = currentDate.getSeconds() / 60
    let minutes = (seconds + currentDate.getMinutes()) /60

    let hours = ((minutes/60) + (currentDate.getHours()) / 12)
    hourHand.style.transform = `rotate(${hours * 360}deg)`; 
    secondsHand.style.transform = `rotate(${seconds * 360}deg)`; 
    minutesHand.style.transform = `rotate(${minutes * 360}deg)`; 
}
analogClockSimulation()