var document = "";

var data = [
  {
    "name": "Boogaloos Bar and Grill",
    "neighborhood": "Northside",
    "address": "2602, 210 W Brookland Park Blvd, Richmond, VA 23222",
    "note": "Cajun and creole cuisine and drink specials"
  },
  {
    "name": "J.R. Crickets RVA",
    "neighborhood": "Northside",
    "address": "1509 Chamberlayne Ave, Richmond, VA 23222",
    "note": "Sports bar with wings"
  },
  {
    "name": "Bryan Park Bar and Grill",
    "neighborhood": "Northside",
    "address": "5516 Lakeside Ave, Richmond, VA 23228",
    "note": "Happy Hour"
  },
  {
    "name": "Lakeside Tavern",
    "neighborhood": "Northside",
    "address": "5406 Lakeside Ave, Henrico, VA 23228",
    "note": "Karaoke"
  }
]

function printSuggestion(inputData) {
  var suggestion = inputData[Math.floor(Math.random() * inputData.length)];
  console.group("Suggestion");
  console.log(JSON.stringify(suggestion, null, '  '));
  console.groupEnd();
  document.getElementById("suggestion").innerHTML =
    '<div class="vcard">' +
      '<div class="org">' + suggestion.name + '</div>' +
      '<div class="adr">' +
        '<div class="street-address">' + suggestion.address + '</div>' +
        '<span class="locality">Richmond</span>, ' +
        '<span class="state">VA</span>' +
      '</div>' +
      '<div class="note">' + suggestion.note + '</div>' +
    '</div>';
}
