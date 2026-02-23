let evenNumbers: number[] = []
let oddNumbers: number[] = []

for (let i: number = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i)
    } else {
        oddNumbers.push(i)
    }
}

console.log('Четные числа: ')
for (const evenNumber of evenNumbers) {
    console.log(evenNumber)
}

console.log('Нечетные числа: ')
for (const oddNumber of oddNumbers) {
    console.log(oddNumber)
}