# plant-sim
A plant growing simulator for your terminal - Soon to be on the web!

- [Overview](#Overview)
- [Installation](#Installation)
- [How to Play](#How-to-Play)
- [MVP](#MVP)
  - [CLI MVP Goals](#CLI-MVP-Goals)
  - [Web-App MVP Goals](#Web-App-MVP-Goals)
    -[Wireframes](#Wireframes)
- [Post MVP](#Post-MVP)
- [Project Change Log](#Project-Change-Log)
- [Code Showcase](#Code-Showcase)
- [Code Issues & Resolutions](#Code-Issues--Resolutions)

## Overview

This is a simple plant-sim game. The goal is to grow a plant to full maturity until it produces a ripe tomato! The amount of sun, soil moisture, and amount of fertilizer all effect how quickly the plant grows. If it is too wet, too dry, or has too much fertilizer, it will begin to die. The amount of sun it recieves can be adjusted, too. More sun helps the plant grow faster, but also dries it out.

## Installation

This game currently runs in node. If you do not already have node installed, follow the installation instructions [here](https://nodejs.org/en/download/package-manager/)

Download this repo. That's it!

Current dependencies:
- readline-sync

## How to Play

From inside the root of this repo, simply run `npm start` and follow the prompts! If you wish to exit before the game is over, use `command c` or `ctrl c` to end the game.

## Future Changes

- Refactor plant types to plant class instead of initializing separate objects - started, need to finish
- Allow re-play (ask if player wants to try again)
- Refactor functions to make them smaller/more modular
- Add flavor text to previous edits
- Fix existing flavor text to relate to each plant, not just the original tomato
- Make an HTML page and apply DOM manipulation to make this a web app
- Add CSS

## MVP

### CLI MVP Goals

- _Initialize Readline Sync to prompt Player - DONE_
- _Create game loop with win condition (plant grows to maturity) - DONE_
- _Plants grow when water level is not too high or too low, fertilizer is not too high, and they are getting enough sun - DONE
- _Different levels of sun result in different growth per turn - DONE_
- _Fertilizer boosts growth - DONE_
- _Too much fertilizer kills the plant - DONE_
- _Too much or too little water kills the plant - DONE_
- _Allow Player to choose from list of different plants - DONE_
- _Allow replay option at the end - DONE_
- _Error handling on each prompt in case Player enters invalid option - DONE_

### Web-App MVP Goals

- _Create wireframes to plan visual layout of the app_
- _Create HTML skeleton_
- _Covert JS to manipulate the DOM_
- _Style with CSS to match wireframes_

#### Wireframes

### Timeframes

| Task                     | Priority | Estimated Time | Actual Time |
| ------------------------ | :------: | :------------: | :---------: |
| Create README            |    H     |     1 hr       |     1 hr    |
| Interview 1              |    H     |     1 hr       |     1 hr    |
| Interview 2              |    H     |     1 hr       |     1 hr    |
| Interview 3              |    H     |     1 hr       |     1 hr    |
| Post Interview Planning  |    H     |     2 hrs      |     2 hrs   |
| Polish and Refactor CLI  |    H     |     3 hrs      |     2 hrs   |
| Add to Portfolio         |    H     |     1 hr       |             |
| Wireframes               |    M     |     2 hrs      |             |
| HTML Page                |    M     |     1 hr       |             |
| Convert to DOM manip.    |    M     |     3 hrs      |             |
| Base Level Styling       |    M     |     3 hrs      |             |
| Extra Styling and Anims. |    L     |     5 hrs      |             |
| TOTAL                    |          |     24 hrs     |     7  hrs  |


### Schedule

| Day     | Deliverables                              | Complete? |
| ------- | ----------------------------------------- | --------- |
| --      | Base Functionality (during interviews)    | YES       |
|Oct 26th | Post-Interview Planning                   | YES       |
|Oct 28th | Refactor and Polish CLI app               | YES       |
|Oct 29th | Post CLI Game to LinkedIn                 |           |
|Nov 3rd  | Wireframes, HTML Skeleton                 |           |
|Nov 4th  | Refactor to DOM, Base Styles              |           |
|Nov 5th  | Styling Polish and Animations             |           |
|Nov 6th  | Add Web App to Portfolio and LinkedIn     |           |

## Post MVP

- Weather events 
  - rain increases soil moisture, automatically puts plant in shade
  - extreme heat dries plant out faster no matter how much sun it is getting
  - extreme wind slows or stops growth, maybe even decreases growth
- Ability to bring plant indoors
  - plant grows slower
  - soil dries out slower
  - weather events don't matter
- Ability to grow more than one plant at a time
  - may need to add ascii art or table to make it easier to see which plant is doing what
  - gameplay (plantStats) will need to be balanced so multiple plants can grow with only one action per turn
- Money system
  - fruits sell for money
  - upgrades or additional plants cost money
- Upgrades
  - greenhouse negates weather events without slowing growth, slows water loss
  - grow lights speed indoor growth and water loss
  -sprinkler constantly waters
  - irrigation maintains proper soil moisture
- Weeds, pests, and diseases
  - weeds prevent additional growth
  - pests and diseases shrink growth
  - additional upgrades to get rid of weeds, pests, and diseases

## Project Change Log

## Code Showcase

## Code Issues & Resolutions
