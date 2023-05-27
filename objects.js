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
      return Math.floor((this.treasury += this.population * this.taxRate));
    },
    applyGrowth(percent) {
      return Math.floor((this.population += this.population * (percent / 100)));
    },
    applyRecession(percent) {
      return Math.floor((this.population -= this.population * (percent / 100)));
    },
  };
}

const sofia = cityRecord("Sofia", 10000, 24000);

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
}

const names = Object.keys(phonebook);
const phoneNumbers = Object.values(phonebook);
const phonebookTupples = Object.entries(phonebook);

function townPopulation(stringsArray) {
  const towns = {};
  for (let string of stringsArray) {
    const townData = string.split(" <-> ");

    const name = townData[0];
    const population = townData[1];

    if (towns[name] != undefined) {
      towns[name] += population;
    } else {
      towns[name] = population;
    }
  }
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

const compareNumbers = {
  ascending: (a, b) => a - b,
  descending: (a, b) => b - a,
};

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

let model = "BMW";
let topSpeed = 250;
let color = "green";

let car = {
  model,
  topSpeed,
  color,
};

car.statistics = {
  milesRun: 124000,
  isDamaged: false,
};

function sing() {
  return `${this.name} is a an excellent singer`;
}

function write() {
  return `${this.name} is a an excellent writer`;
}

function act() {
  return `${this.name} is a an excellent actor`;
}

const maria = {
  name: "Maria",
  act,
  write,
  sing,
};

const leonardo = {
  name: "Leo",
  write,
};

const rafael = {
  name: "Rafa",
  act,
};

function createRect(width, height) {
  const rect = {
    width,
    height,
  };

  rect.getArea = () => {
    return rect.width * rect.height;
  };

  return rect;
}

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};

const orders = [
  {
    template: { name: "ACME Printer" },
    parts: ["print"],
  },
  {
    template: { name: "Initech Scanner" },
    parts: ["scan"],
  },
  {
    template: { name: "ComTron Copier" },
    parts: ["scan", "print"],
  },
  {
    template: { name: "BoomBox Stereo" },
    parts: ["play"],
  },
];

function objectFactory(library, orders) {
  const result = [];

  for (let order of orders) {
    const product = {
      name: order.template.name,
    };

    for (let part of order.parts) {
      const libraryKeys = Object.keys(library);

      if (libraryKeys.includes(part)) {
        product[part] = library[part];
      }
    }
    result.push(product);
  }

  return result;
}

const result = objectFactory(library, orders);

function boost(hoverboard) {
  hoverboard.boost = () => {
    console.log(`Hoverboard has been boosted by 20%`);
  };
}

const hoverboard = {
  brand: "G.",
};

boost(hoverboard);

hoverboard.boost();

let data = `{ "manager": {"firstName":"John","lastName":"Doe"}  }`;

let obj = JSON.parse(data);

let newObj = {
  name: "John",
  age: 30,
  city: "New York",
};

let objJson = JSON.stringify(newObj);

let arr = ["John", "Peter", "Stefano"];

let myArrJSON = JSON.stringify(arr);
