function filterForCards(arr) {
  let cardTitleEl;
  let cardImageEl;
  let cardPriceEl;
  arr.forEach(el => {
    cardTitleEl = el.title;
    cardPriceEl = el.price;
    cardImageEl = el.pic[0];
    console.log([cardImageEl, cardTitleEl, cardPriceEl]);
    return [cardImageEl, cardTitleEl, cardPriceEl];
  });
}

let cardFilter = filterForCards(flats);
