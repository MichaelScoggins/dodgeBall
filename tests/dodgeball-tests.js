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

// 20pts - Minimum 3 Unit Tests - Use Mocha and Chai to give us at least 3 unit tests that prove a person becomes a player and a player becomes a teammate.

//3 tests//
// 1.
// 2.
// 3.

if (typeof describe === "function") {
  describe("DodgeBallPlayer", () => {
    it("Should create new instance of DodgeBallPlayer", () => {
      // assert.equal(listOfPlayers.length, 0)
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
    it("Should prove person becomes a player", () => {
      assert.equal(globoGym.length, 0)
      // const vinceVaughn = new DodgeBallPlayer(
      //   "Vince Vaughn",
      //   true,
      //   true,
      //   true,
      //   true,
      //   16
      // )
      makePlayer(arrOfPeople[0])
      // assert.equal()
      assert.equal(globoGym.length, [1])
      const vinceVaughnAvgJoe = new AverageJoesTeammate(
        "Vince Vaughn",
        true,
        true,
        true,
        true,
        16,
        "Average Joes",
        "Joes"
      )
      assert.equal(vinceVaughn.teamName, "Average Joes")
    })
    // it("Should add person to listOfPlayers", () => {
    //   const player1 = new DodgeBallPlayer("Rick Astley")
    // })
  })
}
