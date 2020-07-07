import './scss/index.scss'

const racket = document.querySelector('.racket')

let left = 35

racket.focus()
racket.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowLeft'){
        left = left - 3
        event.target.style = `left:${left}%`
        if(left <= 10){
            left = 10
        }
    }
    if(event.key === 'ArrowRight'){
        left = left + 3
        event.target.style = `left:${left}%`
    }
    if(left >= 70){
        left = 70
    }
})
