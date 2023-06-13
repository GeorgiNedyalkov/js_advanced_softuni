class Garden {
  constructor(spaceAvailable, plants = [], storage = []) {
    this.spaceAvailable = spaceAvailable;
    this.plants = plants;
    this.storage = storage;
  }

  addPlant(plantName, spaceRequired) {
    if (spaceRequired > this.spaceAvailable) {
      throw new Error("Not enough space in the garden.");
    }

    this.spaceAvailable -= spaceRequired;

    let plant = {
      plantName,
      spaceRequired,
      ripe: false,
      quantity: 0,
    };

    this.plants.push(plant);

    return `The ${plant.plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    let plant = this.plants.find((p) => p.plantName === plantName);

    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plant.ripe === true) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    if (quantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }

    plant.quantity += quantity;
    plant.ripe = true;

    if (quantity === 1) {
      return `${quantity} ${plant.plantName} has successfully ripened.`;
    } else if (quantity > 1) {
      return `${quantity} ${plant.plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName) {
    let plant = this.plants.find((p) => p.plantName === plantName);

    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden`);
    }

    if (plant.ripe === false) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }

    this.plants = this.plants.filter((p) => p.plantName !== plant.plantName);

    this.storage.push({
      plantName: plant.plantName,
      quantity: plant.quantity,
    });

    this.spaceAvailable += plant.spaceRequired;

    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    let report = `The garden has ${this.spaceAvailable} free space left. \n`;

    this.plants = this.plants.sort((a, b) => a.plantName > b.plantName);

    let plantsArr = [];
    let plantsStr = "";

    this.plants.map((p) => plantsArr.push(p.plantName));

    plantsStr = plantsArr.join(", ");

    report += `Plants in the garden: ${plantsStr}\n`;

    if (this.storage.length === 0) {
      report += "Plants in storage: The storage is empty";
    } else {
      let storagePlants = [];
      let storageString = "";

      this.storage.map((p) =>
        storagePlants.push(`${p.plantName} (${p.quantity})`)
      );

      storageString = storagePlants.join(" ");

      report += `Plants in storage: ${storageString}`;
    }

    return report;
  }
}

const myGarden = new Garden(250);

// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 200));
// console.log(myGarden.addPlant("olive", 50));

// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 100));
// console.log(myGarden.addPlant("cucumber", 30));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.ripenPlant("orange", 4));

// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 100));
// console.log(myGarden.addPlant("cucumber", 30));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.ripenPlant("olive", 30));

// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 100));
// console.log(myGarden.addPlant("cucumber", 30));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.ripenPlant("cucumber", -5));

// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 200));
// console.log(myGarden.addPlant("raspberry", 10));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.harvestPlant("apple"));
// console.log(myGarden.harvestPlant("olive"));

// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 200));
// console.log(myGarden.addPlant("raspberry", 10));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.harvestPlant("apple"));
// console.log(myGarden.harvestPlant("raspberry"));

console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());
