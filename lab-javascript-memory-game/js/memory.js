class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pairsClicked = 0
    this.pairsGuessed = 0
    this.currentPair = []
    this.pickedCards = []
  }

  shuffleCards() {
    if (!this.cards) return undefined
    this.cards = this.cards.sort(
      (a, b) =>  .5 - Math.random()
    )
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++

    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } 

    return false
  }

  checkIfFinished() {
    return (this.pairsGuessed === this.cards.length / 2) 
    ? true : false
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame
