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

// base plant stats
let water = 50
let growth = 0
let sun = 2
let sunType
let fertilizer = 0
let win = false
let dead
let flowers
let bloom
let fruit
let ripe

const plantStats = () => {
  // establish sun values
  if (sun === 1) {
    sunType = 'shade'
  } else if (sun === 2) {
    sunType = 'partial sun'
  } else if (sun === 3) {
    sunType = 'full sun'
  }

  // establish growth levels
  if (growth < 50) {
    flowers = false
  } else if (growth >= 50) {
    flowers = true
  }

  if (growth < 60) {
    bloom = false
  } else if (growth >= 60) {
    bloom = true
  }

  if (growth < 75) {
    fruit = false
  } else if (growth >= 75) {
    fruit = true
  }

  if (growth < 100) {
    ripe = false
  } else if (growth >= 100) {
    ripe = true
  }

  if (growth < 0) {
    dead = true
  }

  // log current status of plant
  if (dead) {
    console.log("Oh no! Your plant died!")
  } else {
    console.log(`Your tomato is currently at ${growth}% of its total growth.`)
    console.log(`Its soil is at ${water}% moisture.`)
    console.log(`It is currently in ${sunType}.`)
    console.log(`It has ${fertilizer} doses of fertilizer.`)  

    if (flowers) {
      console.log("Your can see some flowers on your plant!")
    }

    if (bloom) {
      console.log("Some of the flowers are blooming!")
    }

    if (fruit) {
      console.log(
        "There are small green tomatoes sprouting from some of the flowers. They seem to be getting bigger!"
      )
    }

    if (ripe) {
      console.log("One of the tomatoes has ripened! You did it!!!")
      win = true
    }
  }
}

// everything that happens on each turn
const playerTurn = () => {
  plantStats()

  while (!win && !dead) {
    console.log("What would you like to do?")

    let choice
    if (sun < 3 && sun > 1) {
      choice = getInput(
        "type (W) to water your plant, (IS) to increase sun, (DS) to decrease sun, (F) to fertilize, or (N) to do nothing."
      )
    } else if (sun === 1) {
      choice = getInput(
        "type (W) to water your plant, (IS) to increase sun, (F) to fertelize, or (N) to do nothing."
      )
    } else if (sun === 3) {
      choice = getInput(
        "type (W) to water your plant, (DS) to decrease sun, (F) to fertelize, or (N) to do nothing."
      )
    }

    choice = choice.toUpperCase()

    if (choice === "W") {
      water += 25
      console.log(spacer)
      console.log("You have watered your plant.")
    } else if (choice === "IS") {
      sun += 1
      console.log(spacer)
      console.log("You have increased the amount of sun for your plant.")
    } else if (choice === "DS") {
      sun -= 1
      console.log(spacer)
      console.log("You have decreased the amount of sun for your plant.")
    } else if (choice === "F") {
      fertilizer += 3
      console.log(spacer)
      console.log("You have fertilized your plant.")
    } else {
      console.log(spacer)
      console.log("You took a nap.")
    }

    if (fertilizer >= 1 && fertilizer <= 5) {
      growth += 5
      fertilizer -= 1
    } else if (fertilizer > 5) {
      growth -= 2
      fertilizer -= 1
      console.log("Uh oh, all that fertilizer is hurting your plant!")
    }

    let growthZone = water >= 25 && water <= 75

    if (sun === 1) {
      water -= 5
    } else if (sun === 2 && growthZone) {
      water -= 10
      growth += 2
    } else if (sun === 2 && !growthZone) {
      water -= 10
    } else if (sun === 3 && growthZone) {
      water -= 20
      growth += 4
    } else if (sun === 3 && !growthZone) {
      water -= 20
    }

    if (growthZone) {
      growth += 5
    } else if (water < 25) {
      console.log(
        "Your plant is looking pretty dry, you may want to water it, or decrease its sun!"
      )
    } else if (water > 75) {
      console.log(
        "Your plant is drowning! You may want to increase the sun to help dry it out!"
      )
    } else if (water < 0) {
      growth -= 20
      console.log(
        "Your plant is dying! Water it and move it to the shade immediately!"
      )
    } else if (water > 100) {
      growth -= 10
      console.log(
        "Your plant is dying! Move it into the sun to help it dry out immediately!"
      )
    }

    plantStats()
  }
}

// ask for username and greet player
const greetPlayer = () => {
  console.log(spacer)
  let username = getInput('Hello, farmer! What is your name? ')
  console.log(spacer)

  console.log(`Hi, ${username}! Welcome to the farm!`)
  console.log('To help you get some growing practice, I want you to grow a ripe tomato.')
  console.log('There is a seedling in the pot in front of you.')
  console.log('It will require water, sun, and lots of care to grow into a mature tomato plant!')
  readyCheck()
}

// ask player if they're ready, capture response, use response to send next message
const readyCheck = () => {
  let ready = getInput('Are you ready to start caring for your plant? Type (Y) for yes, or (N) for no.')
  console.log(spacer)
  
  ready = ready.toUpperCase()

  if (ready === 'Y' || ready === 'YES') {
    playerTurn()
  } else if (ready === 'N' || ready === 'NO') {
    console.log('Oh, ok. Maybe next time.')
  } else {
    console.log("What was that? I didn't understand you.")
    readyCheck()
  }
}

greetPlayer()
