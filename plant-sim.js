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

// greet a new player

const greetPlayer = () => {
  let username = getInput('Hello, farmer! What is your name? ')
  console.log(`Hi, ${username}! Welcome to the farm!`)
}

greetPlayer()
