var document = "";

var data = [
{
  "name": "Gallery5",
  "neighborhood": "Jackson Ward",
  "address": "200 W Marshall St, Richmond, VA 23220",
  "note": "arts center, museum, gallery, venue, and community space in Richmond"
},
{
  "name": "Black History Museum and Cultural Center of Virginia",
  "neighborhood": "Jackson Ward",
  "address": "122 W Leigh St, Richmond, VA 23220",
  "note": "Snug museum with exhibits & artifacts devoted to African-American history plus a gift shop & more"
},
{
  "name": "Maggie L. Walker National Historic Site",
  "neighborhood": "Jackson Ward",
  "address": "600 N 2nd St, Richmond, VA 23219",
  "note": "United States National Historic Landmark"
}
];

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
