const clientsEstimations = []
let mark =

function askClientToGiveEstimation() {
    let mark = (prompt('Как вы оцениваете нашу кофейню от 1 до 10?'))
    mark = Number(mark)
    if (mark >= 1 && mark <= 10) {
        clientsEstimations.push(mark)
    }
}
for (let i=0; i < 5; i++){
    mark()
}

let goodEstimations = clientsEstimations.filter(mark => mark > 5).length
let notGoodEstimations = clientsEstimations.filter(mark => mark <= 5).length

alert(`Всего положительных оценок: ${goodEstimations}; Всего трицательных оценок: ${notGoodEstimations}`)
