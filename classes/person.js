class Person {
  _age;

  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._age = age;
    this.email = email;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (!Number.isInteger(value) || value < 0 || value > 150) {
      throw new RangeError("Age must be an integer between 0 and 150");
    }

    this._age = value;
  }

  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
  }
}

function getPersons() {
  let anna = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
  let softuni = new Person("SoftUni");
  let stephan = new Person("Stephan", "Johnson", 25);
  let gabriel = new Person("Gabriel", "Peterson", 24, "g.p@gmail.com");

  return [anna, softuni, stephan, gabriel];
}
