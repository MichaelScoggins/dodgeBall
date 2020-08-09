const assert = require("assert")

// import classes
const {
  DodgeBallPlayer,
  Teammate,
  globoGym,
  makePlayer,
  arrOfPeople,
} = require("../main.js")
// const globoGym = require("../main.js")
// const (DodgeBallPlayer) = require("../main.js")

// in the above lines i was trying to make it possible to run makePlayer() but i get "document is not defined" because of a line using "document.getElementByID(etc)". is there a way to run mocha in the browser? did i do something wrong?

// 20pts - Minimum 3 Unit Tests - Use Mocha and Chai to give us at least 3 unit tests that prove a person becomes a player and a player becomes a teammate.

//3 tests//
// 1. Should create new instance of DodgeBallPlayer
// 2. Should be able to create instance of Teammate
// 3. Teammate Objects should have color and mascot keys

if (typeof describe === "function") {
  describe("DodgeBallPlayer", () => {
    it("Should create new instance of DodgeBallPlayer", () => {
      const vinceVaughn = new DodgeBallPlayer(
        "Peter LaFleur",
        true,
        true,
        true,
        true,
        16
      )
      assert.equal(vinceVaughn.player, "Peter LaFleur")
    })
  })
  describe("Teammate", () => {
    it("Should be able to create instance of Teammate", () => {
      const vinceVaughnTeammate = new Teammate(
        "Peter LaFleur",
        true,
        true,
        true,
        true,
        16,
        "Blue",
        "Average Joes"
      )
      assert.equal(vinceVaughnTeammate.mascot, "Average Joes")
    })
    it("Teammate Objects should have color and mascot keys", () => {
      const benStillerTeammate = new Teammate(
        "White Goodman",
        true,
        true,
        true,
        true,
        16,
        "Red",
        "Globo Gym"
      )
      assert.equal(benStillerTeammate.color, "Red")
      assert.equal(benStillerTeammate.mascot, "Globo Gym")
    })
  })
}
