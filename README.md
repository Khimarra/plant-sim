# plant-sim
A plant growing simulator for your terminal

## Purpose

This is a simple plant-sim game. The goal is to grow a tomato plant to full maturity until it produces a ripe tomato! The amount of sun, soil moisture, and amount of fertilizer all effect how quickly the plant grows. If it is too wet, too dry, or has too much fertilizer, it will begin to die. The amount of sun it recieves can be adjusted, too. More sun helps the plant grow faster, but also dries it out.

## Installation

This game runs in node. If you do not already have node installed, follow the installation instructions [here](https://nodejs.org/en/download/package-manager/)

Download this repo and run `npm install readline-sync` inside the root directory to install dependencies.

Current dependencies:
- readline-sync

## How to Play

From inside the root of this repo, simply run `node plant-sim.js` and follow the prompts! If you wish to exit before the game is over, use `command c` or `ctrl c` to end the game.

## Future Changes

- BUG-FIX: Water over 100% or under 0% should kill the plant. Currently not working.
- Refactor to allow for different plant types
  - Some plants will be easier to grow than others
  - Math on plantStats to find percentages instead of values, starting values will be different for each plant.
  - Give player choice of plant at beginning of game
- Allow re-play (ask if player wants to try again)
- Possibly refactor some if/else statements to switches because switches are more efficient time complexity (but if/else is more readable)
- Add error-handling if user types choice that is not an option
- Add weather events 
  - rain increases soil moisture, automatically puts plant in shade
  - extreme heat dries plant out faster no matter how much sun it is getting
  - extreme wind slows or stops growth, maybe even decreases growth
- Add ability to bring plant indoors
  - plant grows slower
  - soil dries out slower
  - weather events don't matter
- Add ability to grow more than one plant at a time
  - may need to add ascii art or table to make it easier to see which plant is doing what
  - gameplay (plantStats) will need to be balanced so multiple plants can grow with only one action per turn
- Add money
  - fruits sell for money
  - upgrades or additional plants cost money
- Add upgrades
  - greenhouse negates weather events without slowing growth, slows water loss
  - grow lights speed indoor growth and water loss
  -sprinkler constantly waters
  - irrigation maintains proper soil moisture
- Add weeds, pests, and diseases
  - weeds prevent additional growth
  - pests and diseases shrink growth
  - additional upgrades to get rid of weeds, pests, and diseases
