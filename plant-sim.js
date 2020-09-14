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

  // currently not actually checking for no
  if (ready === 'Y' || ready === 'YES') {
    console.log('game play function goes here...')
  } else if (ready === 'N' || ready === 'NO') {
    console.log('Oh, ok. Maybe next time.')
  } else {
    console.log("What was that? I didn't understand you.")
    readyCheck()
  }
}

greetPlayer()
