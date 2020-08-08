const assert = require("assert")

// import classes
const {
  DodgeBallPlayer,
  GloboGymTeammate,
  AverageJoesTeammate,
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
// 2. Should be able to create instance of AverageJoesTeammate
// 3. Teammate Objects should have color and mascot keys

if (typeof describe === "function") {
  describe("DodgeBallPlayer", () => {
    it("Should create new instance of DodgeBallPlayer", () => {
      const vinceVaughn = new DodgeBallPlayer(
        "Vince Vaughn",
        true,
        true,
        true,
        true,
        16
      )
      assert.equal(vinceVaughn.player, "Vince Vaughn")
    })
  })
  describe("GloboGymTeammate", () => {
    it("Should be able to create instance of AverageJoesTeammate", () => {
      const vinceVaughnAvgJoe = new AverageJoesTeammate(
        "Vince Vaughn",
        true,
        true,
        true,
        true,
        16,
        "Blue",
        "Average Joes"
      )
      assert.equal(vinceVaughnAvgJoe.mascot, "Average Joes")
    })
    it("Teammate Objects should have color and mascot keys", () => {
      const vinceVaughnAvgJoe = new AverageJoesTeammate(
        "Vince Vaughn",
        true,
        true,
        true,
        true,
        16,
        "Blue",
        "Average Joes"
      )
      assert.equal(vinceVaughnAvgJoe.color, "Blue")
      assert.equal(vinceVaughnAvgJoe.mascot, "Average Joes")
    })
  })
}
