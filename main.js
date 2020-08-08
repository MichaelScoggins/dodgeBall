/* eslint-disable max-classes-per-file */
// const assert = require("assert")

// Once you understand the challenge, whiteboard the logic.
// Create a list of steps your app needs to do (code plan).
//
//
// 1. needs to be able to add add People to Players. onClick, the People are .pushed into the Players column and removed from the People list while getting new values of a player added to them.
//
// Translate to pseudo code.
// Translate to JavaScript on paper.
// /////////////Make a repo, clone, open and copy/paste the starter code into two new files: index.html and main.js
// Start by working through the existing code to understand it and write comments explaining what each line does.
// Put your code plan in the README.md file or your repo

// Work through the following challenges:

//     Use the class keyword to create a template of a dodgeBallPlayer that requires canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience.

//     Push these new dodge ball Player objects into a new array and then display them in the DOM as available players to pick.

//     Add a button to each new player that will allow each one to be selected for either Blue Team or Red Team and now has mascot and teamColor

//     Use the *this* keyword to assign each player to a team with an *onclick*. Assign them to either Blue Team or Red Team.

//     Display the two teams in a new list in the DOM with appropriate titles.

//     Create 3 tests for your application.

// 20pts - Code Plan -  Include this in a README.md file in your folder with comment in your code.

// 20pts - Can add People to Players - When clicked the people are added to the Players column and removed from the People list while getting new values of a player added to them.

// 20pts - Can add dodgeballPlayers to different [Teams] - When we *click* on the globoGym <button> the dodgeballPlayer is added to the globoGymTeam and removed from the arrayOfPeople while also getting the properties/keys, "color" and "mascot" *extended* to them when they are moved to a team.

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
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: false,
    yearsExperience: 2,
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 15,
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 3,
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 1,
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 5,
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 15,
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 4,
  },
]
// creates empty arrays for lists of players and teams
const listOfPlayers = []
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

class AverageJoesTeammate extends DodgeBallPlayer {
  constructor(
    player,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience,
    teamName,
    mascot
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
    this.teamName = teamName
    this.mascot = mascot
  }
}
class GloboGymTeammate extends DodgeBallPlayer {
  constructor(
    player,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience,
    teamName,
    mascot
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
    this.teamName = teamName
    this.mascot = mascot
  }
}

// populate HTML function
const listPeopleChoices = () => {
  const bodyElement = document.getElementById("body")
  const listButton = document.getElementById("list-people-button")
  bodyElement.removeChild(listButton)
  const listElement = document.getElementById("people")
  listElement.className = "people-list"
  arrOfPeople.map((person) => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener("click", function () {
      makePlayer(person)
      li.removeChild(this)
    })
    if (
      person.canThrowBall == true &&
      person.canDodgeBall == true &&
      person.hasPaid == true &&
      person.isHealthy == true &&
      person.yearsExperience > 0
    ) {
      li.appendChild(button)
      li.appendChild(
        document.createTextNode(person.name + " - " + person.skillSet)
      )
    } else {
      const ineligiblePlayer = document.createElement("LI")
      li.appendChild(ineligiblePlayer)
      ineligiblePlayer.innerHTML = `${person.name} did not meet all pre-game criteria`
      ineligiblePlayer.style.color = "red"
    }
    listElement.append(li)
  })
}
//END OF LIST PEOPLE BUTTON //

// MAKE PLAYER BUTTON //
const makePlayer = (id) => {
  const eligibleList = document.getElementById("players")
  eligibleList.className = "eligible-list"
  const eligibleLI = document.createElement("LI")
  const globoList = document.getElementById("globo")
  const joesList = document.getElementById("joes")
  const globoLI = document.createElement("LI")
  const joesLI = document.createElement("LI")
  globoLI.className = "globo-team-list"
  joesLI.className = "joes-team-list"
  const globoButton = document.createElement("BUTTON")
  const avgJoeButton = document.createElement("BUTTON")
  eligibleLI.append(avgJoeButton)
  eligibleLI.append(globoButton)
  eligibleLI.appendChild(
    document.createTextNode(
      id.name + " - " + "Years Exp: " + id.yearsExperience
    )
  )
  globoButton.innerHTML = "Team Globo Gym"
  avgJoeButton.innerHTML = "Team Average Joes"
  eligibleList.append(eligibleLI)
  globoButton.addEventListener("click", function () {
    if (
      globoGym.length < 3 &&
      id.canThrowBall == true &&
      id.canDodgeBall == true &&
      id.hasPaid == true &&
      id.isHealthy == true &&
      id.yearsExperience > 0
    ) {
      globoGym.push(
        new GloboGymTeammate(
          id.name,
          id.canThrowBall,
          id.canDodgeBall,
          id.hasPaid,
          id.isHealthy,
          id.yearsExp,
          "Globo Gym",
          "Purple Cobras"
        )
      )
      globoList.append(globoLI)
      globoLI.appendChild(
        document.createTextNode(`${id.name} - Years Exp: ${id.yearsExperience}`)
      )
      eligibleLI.removeChild(this)
      eligibleLI.removeChild(avgJoeButton)
    } else if (
      id.canThrowBall !== true ||
      id.canDodgeBall !== true ||
      id.hasPaid !== true ||
      id.isHealthy !== true ||
      id.yearsExperience <= 0
    ) {
      alert("Not Eligible")
    } else {
      alert("Globo Gym Team Full")
    }
  })

  avgJoeButton.addEventListener("click", function () {
    if (
      averageJoes.length < 3 &&
      id.canThrowBall == true &&
      id.canDodgeBall == true &&
      id.hasPaid == true &&
      id.isHealthy == true &&
      id.yearsExperience > 0
    ) {
      averageJoes.push(
        new AverageJoesTeammate(
          id.name,
          id.canThrowBall,
          id.canDodgeBall,
          id.hasPaid,
          id.isHealthy,
          id.yearsExp,
          "Average Joes",
          "Joes"
        )
      )
      joesList.append(joesLI)
      joesLI.appendChild(
        document.createTextNode(`${id.name} - Years Exp: ${id.yearsExperience}`)
      )
      eligibleLI.removeChild(this)
      eligibleLI.removeChild(globoButton)
    } else if (
      id.canThrowBall !== true ||
      id.canDodgeBall !== true ||
      id.hasPaid !== true ||
      id.isHealthy !== true ||
      id.yearsExperience <= 0
    ) {
      alert("Not Eligible")
    } else {
      alert("Average Joes Team Full")
    }
  })
}
// END OF MAKEPLAYER BUTTON //

if (typeof describe === "function") {
  describe("DodgeBallPlayer", () => {
    it("Should add person to listOfPlayers", () => {
      const player1 = new DodgeBallPlayer("Rick Astley")
    })
  })
}
