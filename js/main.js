const card = document.querySelector('.card')
console.log(card)

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




card.addEventListener('click', onCardClicked)