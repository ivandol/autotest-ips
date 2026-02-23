function checkAccess(age: number): void {
    if (age >= 18) {
        console.log('Страница доступна')
    } else {
        console.log('Страница не доступна')
    }
}

const age: number = 20

checkAccess(age)