function printDeckOfCards(arr) {
  function createCard(face, suit) {
    if (face < 2 || face > 10) {
      throw new Error(`Invalid card: ${face + suit}`);
    }

    if (face != "A" || face != "K" || face != "Q" || face != "J") {
      Number(face);
    }

    let suitIcon;

    switch (suit) {
      case "S":
        suitIcon = "\u2660";
        break;
      case "H":
        suitIcon = "\u2665";
        break;
      case "D":
        suitIcon = "\u2666";
        break;
      case "C":
        suitIcon = "\u2663";
        break;

      default:
        throw new Error("Invalid suit");
    }

    return {
      toString: function () {
        return face.toUpperCase() + suitIcon;
      },
    };
  }

  let cards = [];

  for (let element of arr) {
    let face, suit;
    // test for 10
    if (element.length === 3) {
      face = element[0] + element[1];
      suit = element[2];
    } else {
      face = element[0];
      suit = element[1];
    }

    let card = createCard(face, suit).toString();
    cards.push(card);
  }

  return cards.join(" ");
}

let deck = ["AS", "10D", "KH", "2C"];

// deck = ["5S", "3D", "QD", "1C"];
console.log(printDeckOfCards(deck));
