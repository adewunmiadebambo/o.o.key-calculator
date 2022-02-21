class calculator {
    expression = '';
    result = '';

    read (userInput) {
        this.expression = userInput
    }

    evaluate (exp) {
        let result = eval(exp || this.expression)
        this.result = result
    }

    sin (exp) {
        let result = eval(this.expression)
        this.result = Math.sin(result)
    }
}

let ourCalculator = new calculator()
// ourCalculator.read(prompt('Enter an expression...'))
// ourCalculator.evaluate()
// alert(`The result is ${ourCalculator.result}`)

const calcForm = document.querySelector('#calc-form')
const userInput = document.querySelector('#userInput')
const resultDisplay = document.querySelector('#result-box h1')
const resetBtn = document.querySelector('#result-box button')
let altKeyPressed = false;

window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Alt') {
        altKeyPressed = true
    }
})

calcForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    if (altKeyPressed) {
        ourCalculator.read(userInput.value)
        ourCalculator.sin()
        altKeyPressed = false
    } else {
        ourCalculator.read(userInput.value)
        ourCalculator.evaluate()
    }

    // ourCalculator.read(userInput.value)
    // ourCalculator.evaluate()
    resultDisplay.textContent = `Result is ${ourCalculator.result}`
}) 

resetBtn.addEventListener('click', () => {
    userInput.value = ''
    resultDisplay.textContent = ''
})