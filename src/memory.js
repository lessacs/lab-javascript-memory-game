class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }

    for (let i = 0; i < this.cards.length; i++) {
    let shuffle = Math.floor(Math.random() * (this.cards.length));
    let temp = this.cards[i];
    this.cards[i] = this.cards[shuffle];
    this.cards[shuffle] = temp;
    return this.cards;
  }
}

  checkIfPair(card1, card2) {
    this.pairsClicked++;
        if (card1 === card2) {
          this.pairsGuessed++;
            return true;
          } else {
            return false;
          }
      }
    
  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length) {
      return 'game finished';
    } else {
    return false;
  }
}
}
