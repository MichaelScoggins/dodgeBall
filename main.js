/* eslint-disable max-classes-per-file */
const assert = require("assert")

// Once you understand the challenge, whiteboard the logic.
// Create a list of steps your app needs to do (code plan).
//
// Translate to pseudo code.
// Translate to JavaScript on paper.
// /////////////Make a repo, clone, open and copy/paste the starter code into two new files: index.html and main.js
// Start by working through the existing code to understand it and write comments explaining what each line does.
// Put your code plan in the README.md file or your repo

// Work through the follow challenges:
//     Use the class keyword to create a template of a dodgeBallPlayer that requires canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience.
//     Push these new dodge ball Player objects into a new array and then display them in the DOM as available players to pick.
//     Add a button to each new player that will allow each one to be selected for either Blue Team or Red Team and now has mascot and teamColor
//     Use the this keyword to assign each player to a team with an onclick. Assign them to either Blue Team or Red Team.
//     Display the two teams in a new list in the DOM with appropriate titles.
//     Create 3 tests for your application.

// 20pts - Code Plan - Include this in a README.md file in your folder with comment in your code.
// 20pts - Can add People to Players - When clicked the people are added to the Players column and removed from the People list while getting new values of a player added to them.
// 20pts - Can add Players to different Teams - When we click on the blue button the Player is added to the blue team and removed from the Player list while also getting the keys color and mascot extended to them when they are moved to a team.
// 20pts - Uses class - This is not a hack job. You should use class to add the new properties you need and extend when you need.
// 20pts - Minimum 3 Unit Tests - Use Mocha and Chai to give us at least 3 unit tests that prove a person becomes a player and a player becomes a teammate.

// establishes an array of objects representing the players and their attributes
const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska",
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky",
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas",
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York",
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia",
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California",
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana",
  },
]
// creates empty arrays for lists of players and teams
const listOfPlayers = ["Walter Cole"]
const globoGym = []
const averageJoes = []

// object constructors for players/teams
class DodgeBallPlayer {
  constructor(
    player,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    this.player = player
    this.canThrowBall = canThrowBall
    this.canDodgeBall = canDodgeBall
    this.hasPaid = hasPaid
    this.isHealthy = isHealthy
    this.yearsExperience = yearsExperience
  }
}
const vinceVaughn = new DodgeBallPlayer("vince", true, true, true, true, 5)

class AverageJoesTeammate extends DodgeBallPlayer {
  constructor(
    player,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    super(
      player,
      canThrowBall,
      canDodgeBall,
      hasPaid,
      isHealthy,
      yearsExperience
    )
    this.player = player
    this.canThrowBall = canThrowBall
    this.canDodgeBall = canDodgeBall
    this.hasPaid = hasPaid
    this.isHealthy = isHealthy
    this.yearsExperience = yearsExperience
  }
}
class GloboGymTeammate extends DodgeBallPlayer {
  constructor(
    player,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    super(
      player,
      canThrowBall,
      canDodgeBall,
      hasPaid,
      isHealthy,
      yearsExperience
    )
    this.player = player
    this.canThrowBall = canThrowBall
    this.canDodgeBall = canDodgeBall
    this.hasPaid = hasPaid
    this.isHealthy = isHealthy
    this.yearsExperience = yearsExperience
  }
}

const avgVinceVaughn = new AverageJoesTeammate(
  "vince",
  true,
  true,
  true,
  true,
  5
)
const benStiller = new DodgeBallPlayer("ben", true, true, true, true, 5)
const globoBenStiller = new GloboGymTeammate("ben", true, true, true, true, 5)

// populate HTML function
const listPeopleChoices = () => {
  const listElement = document.getElementById("people")
  arrOfPeople.map((person) => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener("click", function () {
      makePlayer(person.id)
    })
    li.appendChild(button)
    li.appendChild(
      document.createTextNode(person.name + " - " + person.skillSet)
    )
    listElement.append(li)
  })
}

const makePlayer = (id) => {
  alert(`li ${id} was clicked!`)
}

if (typeof describe === "function") {
  describe("DodgeBallPlayer", () => {
    it("Should add person to listOfPlayers", () => {
      const player1 = new DodgeBallPlayer("Rick Astley")
    })
  })
}
