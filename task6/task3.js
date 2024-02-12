function getDivisorsCount(number = 1) {
    if (number > 0 && Number.isInteger(number)) {
        let count = 0
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                count++ }
        } console.log(`${count} (последние делители - ${number} )`)
    } else {
        alert('number должен целым числом и больше нуля')
    }
}

getDivisorsCount(4)
getDivisorsCount(5)
getDivisorsCount(12)
