var document = "";

var data = [
  {
  "name": "Stone Brewing",
  "neighborhood": "Shockoe Bottom",
  "address": "4300 Williamsburg Ave",
  "note": "Beautiful place. Easy to get to. Large selection of beers."  
  },
  {
  "name": "Lickinghole Creek Brew Pub",
  "neighborhood": "Shockoe Bottom",
  "address": "1717 E. Franklin Street",
  "note": "8 beers on tap. Nice place. Solid beers brewed at Goochlnad location."
  },
  {
    "name": "Ponies & Pints",
    "neighborhood": "Shockoe Bottom",
    "address": "110 N. 18th Street",
    "note": "Bet on the ponies and get something to eat and drink. 11AM Happy Hour!"
  },
  {
    "name": "Nota Bene Restaurant & Bar",
    "neighborhood": "Shockoe Bottom",
    "address": "2110 E. Main Street",
    "note": "Dimly lit restaurant and bar with great food."
  }
];

function printSuggestion(inputData) {
  var suggestion = inputData[Math.floor(Math.random() * inputData.length)];

  // Suggestion data for bars and restaurants in Shockoe Bottom
  
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
