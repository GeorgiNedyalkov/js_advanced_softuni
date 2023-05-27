function cityTaxes(name, population, treasury) {
  return {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      return (this.treasury += this.treasury * (this.taxRate / 100));
    },
    applyGrowth(percentage) {
      return (this.population += this.population * (percentage / 100));
    },
    applyRecession(percentage) {
      return (this.population -= this.population * (percentage / 100));
    },
  };
}

function cityRecord(name, population, treasury) {
  return {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      return Math.floor(this.treasury + this.population * this.taxRate);
    },
    applyGrowth(percent) {
      return Math.floor(this.population + this.population * (percent / 100));
    },
    applyRecession(percent) {
      return Math.floor(this.population - this.population * (percent / 100));
    },
  };
}

function variblesCityRecord(name, population, treasury) {
  const city = {};

  city.name = name;
  city.population = population;
  city["treasury"] = treasury;

  return city;
}

const phonebook = {
  Sonia: "0888868644",
  Plamen: "3452326690",
  Georgi: "0888868644",
};

for (let name in phonebook) {
  const statement = `The phone number of ${name} is ${phonebook[name]}`;

  // console.log(statement);
}

// Obtain all keys or values in an object using the Object object in JavaScript

const names = Object.keys(phonebook);
const phoneNumbers = Object.values(phonebook);
const phonebookTupples = Object.entries(phonebook);

function townPopulation(stringsArray) {
  // create a towns object to store the result
  const towns = {};
  // iterate over each string
  for (let string of stringsArray) {
    const townData = string.split(" <-> ");

    const name = townData[0];
    const population = townData[1];

    // if town name is not in registry add it to registry
    if (towns[name] != undefined) {
      towns[name] += population;
    } else {
      towns[name] = population;
    }
  }
  // print all the towns
  for (let town in towns) {
    console.log(`${towns[town]} : ${town}`);
  }
}

const strArr = [
  "Istanbul <-> 100000",
  "Honk Kong <-> 232421",
  "Istanbul <-> 1",
];

let person = {
  firstName: "John",
  lastName: "Adams",
  greet: function (age) {
    return `Hello my name is ${
      this.firstName + " " + this.lastName
    } and I am ${age} years old. Nice to meet you!`;
  },
};

const john = person.greet(26);

// Objects as function libraries

// sorting helper
const compareNumbers = {
  ascending: (a, b) => a - b,
  descending: (a, b) => b - a,
};

// Objects as a a switch replacement
let count = 5;

const parser = {
  increment() {
    count++;
  },
  decrement() {
    count--;
  },
  reset() {
    count = 0;
  },
};

parser["decrement"]();

const newPerson = {
  firstName: "Georgi",
  lastName: "Nedyalkov",
  fullName() {
    return this.firstName + " " + this.lastName;
  },
};

const getFullName = newPerson.fullName;

const anotherPerson = {
  firstName: "Bob",
  lastName: "Smith",
};

anotherPerson.fullName = getFullName;
