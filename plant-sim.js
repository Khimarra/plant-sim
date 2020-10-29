// goal: grow a tomato plant until it has produced a ripe tomato

// base plant stats:
//   water level - 0-100 (each watering adds 25)
//   sun preference - shade, partial, full (water drops 5 in shade, 10 in partial, 20 in full)
//   fertilizer - 0+ (each fertilizing adds 3, lose 1 each turn, over 5 plant starts burning)
//   growth - 0-100, starts at 0

// each turn, plant can be watered, fertilized, or have sun adjusted
// growth when water > 25 and < 75 and fertilizer < 6
// more sun grows faster, but also dries out faster
// growth +5 each turn, +10 each turn when fertilizer > 0 and < 6
// once plant is at 50 growth, flowers bud. 60, flowers bloom. 75, fruit forms. 100, fruit is ripe!
// if plant fails to grow for 3 turns, it dies... game over

const readlineSync = require('readline-sync')

const getInput = (prompt) => {
  return readlineSync.question(`${prompt} `)
}

const spacer = "========================================"

class Plant {
  // all plants start with these values:
  minWater = 0
  growth = 0
  sun = 2
  fertilizer = 0

  // construct each plant with unique name, plural version of name, max water, and water%
  constructor(name, plural, maxWater) {
    this.name = name
    this.plural = plural
    this.maxWater = maxWater
    this.water = maxWater / 2
  }

  // ===== DO MATH ON PLANT STATS =====
  addWater(amount) {
    this.water = this.water + amount
  }

  addSun(amount) {
    this.sun = this.sun + amount
  }

  addFertilizer(amount) {
    this.fertilizer = this.fertilizer + amount
  }

  addGrowth(amount) {
    this.growth = this.growth + amount
  }

  // ===== ESTABLISH SUN VALUES =====
  sunTypeCheck() {
    let sunType
    if (this.sun === 1) {
      sunType = "shade"
    } else if (this.sun === 2) {
      sunType = "partial sun"
    } else if (this.sun === 3) {
      sunType = "full sun"
    }
    return sunType
  }

  // ===== ESTABLISH GROWTH LEVELS =====
  // plants flower at 50% growth
  flowerCheck() {
    if (this.growth >= 50) {
      console.log("Your can see some flowers on your plant!")
    }
  }

  // flowers bloom at 60% growth
  bloomCheck() {
    if (this.growth >= 60) {
      console.log("Some of the flowers are blooming!")
    }
  }

  // fruits form at 75% growth
  fruitCheck() {
    if (this.growth >= 75) {
     console.log(
       `There are small green ${this.plural} sprouting from some of the flowers. They seem to be getting bigger!`
     )
    }
  }

  // fruit is ripe (WIN CONDITION) at 100% growth
  ripeCheck() {
    if (this.growth >= 100) {
      console.log(`One of the ${this.plural} has ripened! You did it!!!`)
      win = true
    }
  }

  // plant dies (LOSS CONDITION) if under 0% growth
  deadCheck() {
    if (this.growth < 0) {
      dead = true
    }
  }

  // ===== PLANT STATS =====
  // check and print plant stats each turn
  stats() {

    // make sure it's still alive
    this.deadCheck()

    // log current status of plant
    if (dead) {
      console.log(`Oh no! Your ${this.name} died!`)
    } else {
      console.log(`Your ${this.name} is currently at ${this.growth}% of its total growth.`)
      console.log(`Its soil is at ${(this.water / this.maxWater) * 100}% moisture.`)
      console.log(`It is currently in ${this.sunTypeCheck()}.`)
      console.log(`It has ${this.fertilizer} doses of fertilizer.`)

      this.flowerCheck()
      this.bloomCheck()
      this.fruitCheck()
      this.ripeCheck()
    }
  }
}

let tomato = new Plant('tomato', 'tomatoes', 100)
let watermelon = new Plant('watermelon', 'watermelons', 150)
let corn = new Plant('corn', 'corn', 80)

const plants = [tomato, watermelon, corn]

let plant

let dead

// base plant stats
let win = false
let growthZone
let choice
let validChoice 

// everything that happens on each turn
const playerTurn = () => {
  // check plant stats before entering while loop to know if conditions are met
  plant.stats()

  // continues to run until plant dies or player wins
  while (!win && !dead) {
    growthZone = plant.water >= 25 && plant.water <= 75

    console.log("What would you like to do?")

    // accept responses regardless of case

    playerChoice()


    if (validChoice) {
      // add growth if there is fertilizer, lose growth if there is too much
      if (plant.fertilizer >= 1 && plant.fertilizer <= 5) {
        plant.addGrowth(5)
        plant.addFertilizer(-1)
      } else if (plant.fertilizer > 5) {
        plant.addGrowth(-2)
        plant.addFertilizer(-1)
        console.log("Uh oh, all that fertilizer is hurting your plant!")
      }
  
       
  
      // lose water each turn, gain growth if growthZone is true
      if (plant.sun === 1) {
        plant.addWater(-5)
      } else if (plant.sun === 2 && growthZone) {
        plant.addWater(-10)
        plant.addGrowth(2)
      } else if (plant.sun === 2 && !growthZone) {
        plant.addWater(-10)
      } else if (plant.sun === 3 && growthZone) {
        plant.addWater(-20)
        plant.addGrowth(4)
      } else if (plant.sun === 3 && !growthZone) {
        plant.addWater(-20)
      }

      growthCheck()

      // log stats again before re-entering the while loop
      plant.stats()
    }
  }
}

// if growthZone is true, add growth. if too wet or too dry, lose growth.
// if water is under 0% or over 100%, lose a lot of growth
const growthCheck = () => {
  if (growthZone) {
    plant.addGrowth(5)
  } else if (plant.water < 0) {
    plant.addGrowth(-20)
    console.log(
      "Your plant is dying! Water it and move it to the shade immediately!"
    )
  } else if (plant.water > plant.maxWater) {
    plant.addGrowth(10)
    console.log(
      "Your plant is dying! Move it into the sun to help it dry out immediately!"
    )
  } else if (plant.water < plant.maxWater * 0.25) {
    console.log(
      "Your plant is looking pretty dry, you may want to water it, or decrease its sun!"
    )
  } else if (plant.water > plant.maxWater * 0.75) {
    console.log(
      "Your plant is drowning! You may want to increase the sun to help dry it out!"
    )
  }
}

// choice options - depends on sun
const playerChoice = () => {
  if (plant.sun < 3 && plant.sun > 1) {
    choice = getInput(
      "type (W) to water your plant, (IS) to increase sun, (DS) to decrease sun, (F) to fertilize, or (N) to do nothing."
    )
  } else if (plant.sun === 1) {
    choice = getInput(
      "type (W) to water your plant, (IS) to increase sun, (F) to fertelize, or (N) to do nothing."
    )
  } else if (plant.sun === 3) {
    choice = getInput(
      "type (W) to water your plant, (DS) to decrease sun, (F) to fertelize, or (N) to do nothing."
    )
  }
  choice = choice.toUpperCase()
  evaluateChoice()
}

// responses to player choices
const evaluateChoice = () => {
  validChoice = true
  if (choice === "W") {
    plant.addWater(25)
    console.log(spacer)
    console.log("You have watered your plant.")
  } else if (choice === "IS") {
    plant.addSun(1)
    console.log(spacer)
    console.log("You have increased the amount of sun for your plant.")
  } else if (choice === "DS") {
    plant.addSun(-1)
    console.log(spacer)
    console.log("You have decreased the amount of sun for your plant.")
  } else if (choice === "F") {
    plant.addFertilizer(3)
    console.log(spacer)
    console.log("You have fertilized your plant.")
  } else if (choice === "N") {
    console.log(spacer)
    console.log("You took a nap.")
  } else {
    console.log(spacer)
    console.log('What was that?')
    validChoice = false
  }
}


// ask for username and greet player
const greetPlayer = () => {
  console.log(spacer)
  let username = getInput('Hello, farmer! What is your name? ')
  console.log(spacer)

  console.log(`Hi, ${username}! Welcome to the farm!`)
  console.log(
    `To help you get some growing practice, I want you to produce your first harvest.`
  )
  console.log('I have several seedlings planted and ready for you.')
  console.log('You will get to choose which type of plant you want to grow.')
  console.log(`They each require water, sun, and lots of care to grow into a mature, productive plant!`)
  choosePlant(plants)
  readyCheck()
}

const choosePlant = (arr) => {
  let option
  let validNumber = false
  for (let i = 0; i < arr.length; i++) {
    option = i + 1
    console.log(option, arr[i].name)
  }
  let choice = getInput("What kind of plant would you like to grow?")

  choice = parseInt(choice)

  while (!validNumber) {
    if (isNaN(choice)) {
      choice = getInput("That's not a plant! Choose a plant by the number.")
    } else if (Number.isInteger(parseFloat(choice))) {
      if (choice > 0 && choice <= arr.length) {
        validNumber = true
        plant = arr[choice - 1]
        console.log(`${plant.name}`)
      } else {
        choice = getInput(
          "That plant isn't available. Choose a plant by the number."
        )
      }
    } else {
      choice = getInput(
        "Are you trying to grow PART of a plant? Choose a whole plant by its number."
      )
    }
  }
}

// ask player if they're ready, capture response, use response to send next message
const readyCheck = () => {
  let ready = getInput(
    "Are you ready to start caring for your plant? Type (Y) for yes, or (N) for no."
  )
  console.log(spacer)

  // accept responses regardless of case
  ready = ready.toUpperCase()

  // responses to player's choice. also allow player to type yes or no
  if (ready === "Y" || ready === "YES") {
    playerTurn()
  } else if (ready === "N" || ready === "NO") {
    console.log("Oh, ok. Maybe next time.")
  } else {
    console.log("What was that? I didn't understand you.")
    readyCheck()
  }
}

greetPlayer()
