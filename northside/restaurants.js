var document = "";

var data = [
  {
    "name": "The Mill on MacArthur",
    "neighborhood": "Northside",
    "address": "4023 MacArthur Ave",
    "note": "Delicious brunch!"
  },
  {
    "name": "Dots Back Inn",
    "neighborhood": "Northside",
    "address": "4030 MacArthur Ave",
    "note": "Very laid back atmosphere"
  },
  {
    "name": "Northside Grille",
    "neighborhood": "Northside",
    "address": "1217 Bellvue Ave",
    "note": "Great burgers"
  },
  {
    "name": "Morsels",
    "neighborhood": "Northside",
    "address": "4040 MacArthur Ave",
    "note": "A fun after-dinner destination"
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
