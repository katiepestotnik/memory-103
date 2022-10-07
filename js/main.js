const cards = document.querySelectorAll('.card')
let isFirstChoiceClicked = false
let firstCard
const flipCard = (target) => {
    target.classList.remove('card-back')
}
const flipCardBack = (target) => {
    target.classList.add('card-back')
}

const onCardClicked = (e) => {
    const target = e.target
    flipCard(target)
    if (isFirstChoiceClicked) {
        if (target.innerText.trim() === firstCard.innerText.trim()) {
            console.log('1')
            target.classList.add('match-card')
            firstCard.classList.add('match-card')
        } else {
            console.log('not 1')
            setTimeout(() => {
                flipCardBack(target)
            }, 2000)
            setTimeout(() => {
                flipCardBack(firstCard)
            }, 2000)
        }
        isFirstChoiceClicked = false
        firstCard = undefined
    } else {
        isFirstChoiceClicked = true
        firstCard = target
        
    }
}





cards.forEach((card) => {
    card.addEventListener('click', onCardClicked)
})


