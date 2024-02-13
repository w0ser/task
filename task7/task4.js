const coffees = ['Latte', 'Cappuccino', 'Americano']
const prices = [1.5, 1, 2]

const updatesPrices = prices.map(price => price + 0.5)
// console.log(updatesPrices)

coffees.forEach((coffee, index) => {
    alert(`Кофе ${coffee} сейчас стоит ${updatesPrices[index]} евро`)
})
