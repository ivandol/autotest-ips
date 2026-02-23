function calc(
    a: number,
    b: number,
    operation: (a: number, b: number) => void
): void {
    operation(a, b)
}

function sum(a: number, b: number): void {
    console.log('Sum is:', a + b)
}

function sub(a: number, b: number): void {
    console.log('Sub is:', a - b)
}

function mul(a: number, b: number): void {
    console.log('Mul is:', a * b)
}

function div(a: number, b: number): void {
    console.log('Div is:', a / b)
}

calc(10, 5, sum)
calc(10, 5, sub)
calc(10, 5, mul)
calc(10, 5, div)