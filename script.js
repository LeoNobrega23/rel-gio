
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let sec = dateToday.getSeconds()

    if(hr <= 6){
        document.body.style.background = 'linear-gradient(120deg, #f3f3f2d8, #25e6ffda)'
    } else if ( hr <= 12 ){
        document.body.style.background = 'linear-gradient(120deg, #ffe53bd8, #ff2525da);'
    } else if(hr > 18){
        document.body.style.background = 'linear-gradient(120deg, #3b26b1d8, #000000)'
    }





    horas.textContent = hr;
    minutos.textContent= min;
    segundos.textContent = sec
})