const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

function griveParcel() {
    if (peopleWaiting.length > 0) {
        const name = peopleWaiting.shift()
        alert(`${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек`)
    }
}

function leaveQueueWithoutParcel() {
    if (peopleWaiting.length > 0) {
        const name = peopleWaiting.pop()
        alert(`${name} не получил(а) посылку и ушел(ла) из очереди`)
    }
}

griveParcel()
griveParcel()

const kirill = peopleWaiting.indexOf('Кирилл')
if (kirill !== -1) {
    peopleWaiting.splice(kirill, 1)
    while (peopleWaiting.length > kirill) {
        leaveQueueWithoutParcel()
    }
}
