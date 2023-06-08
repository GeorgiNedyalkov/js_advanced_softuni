class Person {
  _age;

  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._age = age;
    this.email = email;
  }

  setAge(value) {
    if (!Number.isNumber(value) || value < 0 || value > 150) {
      throw new RangeError("Age must be an integer between 0 and 150");
    }

    this.age = value;
  }

  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
  }
}

const person = new Person("Georgi", "Nedyalkov", 28, "gnedyalkov94@gmail.com");

person.age = {};
