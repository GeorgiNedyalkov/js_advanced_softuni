class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    for (let goal in this.goals) {
      if (peak === goal) {
        return `${peak} has already been added to your goals`;
      }
    }

    this.goals = {
      ...this.goals,
      [peak]: altitude,
    };

    return `You have successfully added a new goal - ${peak}`;
  }

  hike(peak, time, difficultyLevel) {
    if (!this.goals.hasOwnProperty(peak)) {
      throw new Error(`${peak} is not in your current goals`);
    }

    if (this.resources === 0) {
      return "You don't have enough resources to start the hike";
    }

    let resourcesNeeded = time * 10;
    let resourcesLeft = this.resources - time * 10;

    if (resourcesLeft < 0) {
      return "You don't have enough resources to complete the hike";
    }

    this.resources -= resourcesNeeded;

    this.listOfHikes.push({
      peak,
      time,
      difficultyLevel,
    });

    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }

  rest(time) {
    this.resources += time * 10;

    if (this.resources >= 100) {
      this.resources = 100;

      return `Your resources are fully recharged. Time for hiking!`;
    } else {
      return `You have rested for ${time} hours and gained ${
        time * 10
      }% resources`;
    }
  }

  showRecord(criteria) {
    if (this.listOfHikes.length === 0) {
      return `${this.username} has not done any hiking yet`;
    }

    let easyHikes = this.listOfHikes.filter(
      (h) => h.difficultyLevel === "easy"
    );

    let hardHikes = this.listOfHikes.filter(
      (h) => h.difficultyLevel === "hard"
    );

    if (
      (criteria === "easy" && easyHikes.length === 0) ||
      (criteria === "hard" && hardHikes.length === 0)
    ) {
      return `${this.username} has not done any ${criteria} hiking yet`;
    }

    if (criteria === "easy") {
      let currentHike;
      let bestEasyHikes = [];

      for (let hike of easyHikes) {
        if (hike.time < currentHike.time) {
          bestEasyHikes.push(hike);
        }
      }

      let { peak, time } = bestEasyHikes[0];
      return `${this.username}'s best ${criteria} hike is ${peak} peak, for ${time} hours`;
    } else if (criteria === "hard") {
      let currentHike = hardHikes[0];
      let bestHardHikes = [];

      for (let hike of hardHikes) {
        if (hike.time <= currentHike.time) {
          bestHardHikes.push(hike);
        }
      }

      let { peak, time } = bestHardHikes[0];
      return `${this.username}'s best ${criteria} hike is ${peak} peak, for ${time} hours`;
    } else if (criteria === "all") {
      let result = "All hiking records:";

      for (let hike of this.listOfHikes) {
        let { peak, time } = hike;
        let newLine = `${this.username} hiked ${peak} for ${time} hours`;
        result += "\n" + newLine;
      }

      return result;
    }
  }
}

let newHike = new SmartHike("Vili");

// console.log(newHike.addGoal("Musala", 2925));
// console.log(newHike.addGoal("Rui", 1706));
// console.log(newHike.hike("Musala", 8, "hard"));
// console.log(newHike.hike("Rui", 3, "easy"));
// console.log(newHike.hike("Everest", 12, "hard"));

// const user = new SmartHike("Vili");
// console.log(user.addGoal("Musala", 2925));
// console.log(user.addGoal("Rui", 1706));
// console.log(user.addGoal("Musala", 2925));

// const user = new SmartHike("Vili");
// console.log(user.addGoal("Musala", 2925));
// console.log(user.addGoal("Rui", 1706));
// console.log(user.hike("Musala", 8, "hard"));
// console.log(user.hike("Rui", 3, "easy"));
// console.log(user.hike("Everest", 12, "hard"));

// const user = new SmartHike("Vili");
// console.log(user.addGoal("Musala", 2925));
// console.log(user.hike("Musala", 8, "hard"));
// console.log(user.rest(4));
// console.log(user.rest(5));

// const user = new SmartHike("Vili");
// console.log(user.showRecord("all"));

// const user = new SmartHike("Vili");
// user.addGoal("Musala", 2925);
// user.hike("Musala", 8, "hard");
// console.log(user.showRecord("easy"));
// user.addGoal("Vihren", 2914);
// user.hike("Vihren", 4, "hard");
// console.log(user.showRecord("hard"));
// user.addGoal("Rui", 1706);
// user.hike("Rui", 3, "easy");
// console.log(user.showRecord("all"));
