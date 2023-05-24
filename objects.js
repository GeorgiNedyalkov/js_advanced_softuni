function cityRecord(name, population, treasury) {
  const city = {
    name,
    population,
    treasury,
  };

  return city;
}

function townPopulation(arr) {
  let towns = {};

  for (let townData of arr) {
    let [name, population] = townData.split(" <-> ");

    population = Number(population);

    if (towns[name] != undefined) {
      population += towns[name];
    }
    towns[name] = population;
  }

  for (let town in towns) {
    console.log(`${town} : ${towns[town]}`);
  }
}

// Add another variation using the Reduce method.

// townPopulation(["Sofia <-> 240000", "Varna <-> 21000", "Sofia <-> 120000"]);

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

// const city = cityTaxes("Tortuga", 7000, 150000);
// city.collectTaxes();
// city.applyGrowth(5);
// console.log(city.treasury);
// console.log(city.population);

function assemblyLine() {}
