var newPolitician = function(name, partyColor) {
  var politician = {};

  politician.name = name;

  politician.partyColor = partyColor;

  politician.electionResults = null;

  politician.totalVotes = function() {
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };

  return politician;
};

var lindaHooper = newPolitician("Linda Hooper", [132, 17, 11]);
var conanSalt = newPolitician("Conan Salt", [245, 141, 136]);

lindaHooper.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

conanSalt.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

lindaHooper.electionResults[9] = 1;
conanSalt.electionResults[9] = 28;

lindaHooper.electionResults[4] = 17;
conanSalt.electionResults[4] = 38;

lindaHooper.electionResults[43] = 11;
conanSalt.electionResults[43] = 27;

console.log(lindaHooper.electionResults);
console.log(conanSalt.electionResults);

var setStateResults = function(state) {
  theStates[state].winner = null;
  if (lindaHooper.electionResults[state] > conanSalt.electionResults[state]) {
    theStates[state].winner = lindaHooper;
  } else if (lindaHooper.electionResults[state] < conanSalt.electionResults[state]) {
    theStates[state].winner = conanSalt;
  }
  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }

  var stateTable = document.getElementById('stateResults');
  var header = stateTable.children[0];
  var body = stateTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

  candidate1Name.innerText = lindaHooper.name;
  candidate2Name.innerText = conanSalt.name;

  candidate1Results.innerText = lindaHooper.electionResults[state];
  candidate2Results.innerText = conanSalt.electionResults[state];

  if (theStates[state].winner == null) {
    winnersName.innerText = "Draw";
  } else {
    winnersName.innerText = theStates[state].winner.name;
  }
};

lindaHooper.totalVotes();
conanSalt.totalVotes();

console.log(lindaHooper.totalVotes);
console.log(conanSalt.totalVotes);

var winner = "";
if (lindaHooper.totalVotes > conanSalt.totalVotes) {
  winner = lindaHooper.name;
} else if (lindaHooper.totalVotes < conanSalt.totalVotes) {
  winner = conanSalt.name;
} else {
  winner = "Draw!";
}

console.log("The winner is " + winner + "!");

var countryTable = document.getElementById('countryResults');
var row = countryTable.children[0].children[0];

row.children[0].innerText = lindaHooper.name;
row.children[1].innerText = lindaHooper.totalVotes;
row.children[2].innerText = conanSalt.name;
row.children[3].innerText = conanSalt.totalVotes;
row.children[5].innerText = winner;
