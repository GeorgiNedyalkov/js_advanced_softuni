class Garden {
  constructor(spaceAvailable, plants, storage) {
    this.spaceAvailable = spaceAvailable;
    this.plants = plants;
    this.storage = storage;
  }

  addPlant(plantName, spaceRequired) {
    if (spaceRequired > this.spaceAvailable) {
      return "Not enough space in the garden";
    }
  }
}
