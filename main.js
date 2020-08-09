/* eslint-disable max-classes-per-file */

// establishes an array of objects representing the players and their attributes
const arrOfPeople = [
  {
    id: 1,
    name: "Kate Veatch",
    age: 31,
    skillSet: "CAN THROW A BALL",
    placeBorn: "Louisville, Kentucky",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 15,
  },
  {
    id: 2,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "CAN DODGE A BALL",
    placeBorn: "Pawnee, Texas",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 3,
  },
  {
    id: 3,
    name: "John Willouby",
    age: 28,
    skillSet: "CAN DODGE A WRENCH",
    placeBorn: "New York, New York",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 1,
  },
  {
    id: 4,
    name: "Justin",
    age: 34,
    skillSet: "CAN'T DODGE A WRENCH",
    placeBorn: "New York, New York",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 1,
  },
  {
    id: 5,
    name: "White Goodman",
    age: 31,
    skillSet: "LIKES TO BREAK A MENTAL SWEAT TOO",
    placeBorn: "Perth, Australia",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 5,
  },
  {
    id: 6,
    name: "Charles Young",
    age: 75,
    skillSet: "KNOWS HIS WAY AROUND AN OXYGEN TANK",
    placeBorn: "Omaha, Nebraska",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: false,
    yearsExperience: 2,
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "ACROBATICS",
    placeBorn: "Los Angeles, California",
    canThrowBall: true,
    canDodgeBall: true,
    hasPaid: true,
    isHealthy: true,
    yearsExperience: 15,
  },
  {
    id: 8,
    name: "Gordon",
    age: 32,
    skillSet: "EXTREME IRONING",
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

class Teammate extends DodgeBallPlayer {
  constructor(
    player,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience,
    color,
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
    this.color = color
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
  const ineligiblePlayer = document.createElement("LI")
  arrOfPeople.map((person) => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    li.appendChild(button)
    li.appendChild(
      document.createTextNode(
        `${person.name}  -  Special Skill: ${person.skillSet}  -  Years of Experience: ${person.yearsExperience}`
      )
    )
    if (
      person.canThrowBall == true &&
      person.canDodgeBall == true &&
      person.hasPaid == true &&
      person.isHealthy == true &&
      person.yearsExperience > 0
    ) {
      listElement.append(li)
    } else {
      listElement.append(ineligiblePlayer)
      ineligiblePlayer.appendChild(button)
      ineligiblePlayer.appendChild(
        document.createTextNode(
          `${person.name}  -  Special Skill: ${person.skillSet}  -  Years of Experience: ${person.yearsExperience}`
        )
      )
      ineligiblePlayer.style.color = "red"
    }
    button.addEventListener("click", function () {
      if (
        person.canThrowBall == true &&
        person.canDodgeBall == true &&
        person.hasPaid == true &&
        person.isHealthy == true &&
        person.yearsExperience > 0
      ) {
        listOfPlayers.push(
          new DodgeBallPlayer(
            person.name,
            person.canThrowBall,
            person.canDodgeBall,
            person.hasPaid,
            person.isHealthy,
            person.yearsExperience
          )
        )
        makePlayer(person)
        li.removeChild(this)
      } else {
        ineligiblePlayer.style.textDecoration = "line-through"
        alert(`${person.name} did not meet all pre-game criteria`)
        ineligiblePlayer.removeChild(this)
      }
    })
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
  globoButton.className = "globo-button"
  avgJoeButton.className = "joe-button"
  eligibleLI.append(avgJoeButton)
  eligibleLI.append(globoButton)
  eligibleLI.appendChild(document.createTextNode(`${id.name}`))
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
        new Teammate(
          id.name,
          id.canThrowBall,
          id.canDodgeBall,
          id.hasPaid,
          id.isHealthy,
          id.yearsExperience,
          "Red",
          "Purple Cobras"
        )
      )
      globoList.append(globoLI)
      globoLI.appendChild(document.createTextNode(`${id.name}`))
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
      eligibleLI.removeChild(globoButton)
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
        new Teammate(
          id.name,
          id.canThrowBall,
          id.canDodgeBall,
          id.hasPaid,
          id.isHealthy,
          id.yearsExperience,
          "Blue",
          "Joes"
        )
      )
      joesList.append(joesLI)
      joesLI.appendChild(document.createTextNode(`${id.name}`))
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
      eligibleLI.removeChild(avgJoeButton)
    }
  })
}
// END OF MAKEPLAYER BUTTON //

module.exports = {
  Teammate,
  DodgeBallPlayer,
  globoGym,
  makePlayer,
  arrOfPeople,
  listOfPlayers,
}
