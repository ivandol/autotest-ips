let secondsPassed: number = 0

const timerId = setInterval(() => {
    secondsPassed++
    console.log(secondsPassed)
}, 1000)

setTimeout(() => {
    clearInterval(timerId)
    console.log('Таймер остановлен')
}, 10500)