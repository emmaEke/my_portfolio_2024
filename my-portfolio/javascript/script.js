let main = document.getElementById('main')
let nav = document.getElementById('nav')
let next = document.getElementById('next')
let theme = document.getElementById('theme')
let cardOne = document.getElementById('cardOne')
let cardTwo = document.getElementById('cardTwo')
let cardThree = document.getElementById('cardThree')

theme.addEventListener('click', ()=>{
    if(main.classList.contains('change')&&next.classList.contains('change')&&theme.classList.contains('black')){
        main.classList.remove('change')
        next.classList.remove('change')
        theme.classList.remove('black')
        theme.innerHTML='Dark Mode'
        cardOne.style.border='2px white solid'
        cardTwo.style.border='2px white solid'
        cardThree.style.border='2px white solid'
    }
    else {
        main.classList.add('change')
        next.classList.add('change')
        theme.classList.add('black')
        theme.innerHTML='Light Mode'
        cardOne.style.border='2px black solid'
        cardTwo.style.border='2px black solid'
        cardThree.style.border='2px black solid'
    }
})

