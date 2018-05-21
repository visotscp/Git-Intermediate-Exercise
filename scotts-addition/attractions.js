var document = "";

var data = [
  {
      "name" : "G-Force Karts",
      "neighborhood" : "Scott's Addition",
      "address" : "4245 Carolina Ave, 23222",
      "note" : "Go carts."
  },
  {
      "name" : "Library of Virginia",
      "neighborhood" : "Scott's Addition",
      "address" : "800 East Broad St, 23219",
      "note" : "It's a library, in Virginia, about Virginia... go figure."
  },
  {
      "name" : "Segway of Virginia",
      "neighborhood" : "Scott's Addition",
      "address" : "1301 East Cary Street, 23219",
      "note" : "Watch out for that open manhole cover on Cary Street!"
  },
  {
      "name" : "The Diamond",
      "neighborhood" : "Scott's Addition",
      "address" : "3001 N Boulevard",
      "note" : "Worst hot dog in Richmond!"
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
