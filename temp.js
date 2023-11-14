let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}

celsiusInput.addEventListener('input', function(){
    let cT = parseFloat(celsiusInput.value)
    let fT = (cT*(9/5)) + 32
    let kT = cT + 273.15

    fahrenheitInput.value = roundNumber(fT)
    kelvinInput.value = roundNumber(kT)
})

fahrenheitInput.addEventListener('input', function(){
    let fT = parseFloat(fahrenheitInput.value)
    let cT = (fT - 32) * (5/9)
    let kT = (fT-32) * (5/9) + 273.15

    celsiusInput.value = roundNumber(cT)
    kelvinInput.value = roundNumber(kT)
})

kelvinInput.addEventListener('input', function(){
    let kT = parseFloat(kelvinInput.value)
    let cT= kT - 273.15
    let fT = (kT - 273.15) * (9/5) + 32

    celsiusInput.value = roundNumber(cT)
    fahrenheitInput.value = roundNumber(fT)
})

btn.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})