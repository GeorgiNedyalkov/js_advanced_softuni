class Square {
  constructor(squareSide) {
    this.side = squareSide;
  }

  area() {
    return this.side * this.side;
  }

  static getbrand() {
    return "Rubik's Square";
  }

  static brand = "Rubik's cube";
}

let firstSquare = new Square(4);
let firstArea = firstSquare.area();

console.log(firstSquare);
console.log(firstArea);

console.log(firstSquare instanceof Square);
console.log(firstSquare instanceof Object);

Square.brand();
