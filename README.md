20pts - Code Plan - Include this in a README.md file in your folder with comment in your code.
20pts - Can add People to Players - When clicked the people are added to the Players column and removed from the People list while getting new values of a player added to them.
20pts - Can add Players to different Teams - When we click on the blue button the Player is added to the blue team and removed from the Player list while also getting the keys color and mascot extended to them when they are moved to a team.
20pts - Uses class - This is not a hack job. You should use class to add the new properties you need and extend when you need.
20pts - Minimum 3 Unit Tests - Use Mocha and Chai to give us at least 3 unit tests that prove a person becomes a player and a player becomes a teammate.

// Once you understand the challenge, whiteboard the logic.
// Create a list of steps your app needs to do (code plan).
// Translate to pseudo code.
// Translate to JavaScript on paper.
// /////////////Make a repo, clone, open and copy/paste the starter code into two new files: index.html and main.js
// Start by working through the existing code to understand it and write comments explaining what each line does.
// Put your code plan in the README.md file or your repo

// Work through the following challenges:

// Use the /class/ keyword to create a "template" of a dodgeBallPlayer that requires canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience.

// Push these new dodge ball Player objects into a new array and then display them in the DOM as available players to pick.

// Add a button to each new player that will allow each one to be selected for either Blue Team or Red Team and now has mascot and teamColor

// Use the _this_ keyword to assign each player to a team with an _onclick_. Assign them to either Blue Team or Red Team.

// Display the two teams in a new list in the DOM with appropriate titles.

// Create 3 tests for your application.

//same as above but original format

// Work through the follow challenges:
// Use the class keyword to create a template of a dodgeBallPlayer that requires canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience.
// Push these new dodge ball Player objects into a new array and then display them in the DOM as available players to pick.
// Add a button to each new player that will allow each one to be selected for either Blue Team or Red Team and now has mascot and teamColor
// Use the this keyword to assign each player to a team with an onclick. Assign them to either Blue Team or Red Team.
// Display the two teams in a new list in the DOM with appropriate titles.
// Create 3 tests for your application.

//code plan starts here//

// 1. add arrOfPeople elements to listOfPlayers with button using addEventListener.
// 2. the button makes listOfPlayers visible on the DOM by .mapping them to HTML elements.
// 3a. have them removed from the <div>List of People</div> and placed into the <div>Dodge Ball Eligible</div> column
// 3b. and use class constructors to represent them as DodgeBallPlayers with new key/value pairs
// 3c. while also .pushing them into 2 teams' respective arrays const globoGym = [], const avgJoes = []//
// 4. utilize .map and HTML/DOM elements again to give each new DodgeBallPlayer two buttons to choose either team
// 5. have each button once more utilize .map and HTML/DOM elements to populate them into one of two <div>Team Div</div> columns
// 6. use if() statements to prevent ineligible players from being drafted based on conditions stored in their key/value pairs
// 7. use if() statement and DOM/CSS magic to signify ineligible player
// 8. use if() statement to prevent uneven teams
// 9. finesse some css
