const cards = document.querySelectorAll('.card')

const flipCard = (target) => {
    target.classList.remove('card-back')
}
const flipCardBack = (target) => {
    target.classList.add('card-back')
}

const onCardClicked = (e) => {
    const target = e.target
    flipCard(target)
    setTimeout(() => {
        flipCardBack(target)
    }, 2000)
}

cards.forEach((card) => {
    card.addEventListener('click', onCardClicked)
})


