var document = "";

var data = [
  {
    "name": "Rider Boot Shop",
    "neighborhood": "Jackson Ward",
    "address": "18 W Broad St",
    "note": "Shoe Store"
  },
  {
    "name": "Rosewood Clothing Co.",
    "neighborhood": "Jackson Ward",
    "address": "16 W Broad St",
    "note": "Women's Clothing Store"
  },
  {
    "name": "Barky's",
    "neighborhood": "Jackson Ward",
    "address": "18 E Broad St",
    "note": "Music Store"
  },
  {
    "name": "Blue Bones Vintage",
    "neighborhood": "Jackson Ward",
    "address": "322 W Broad St Unit B",
    "note": "Vintage Clothing Store"
  },
  {
    "name": "Festival Flags",
    "neighborhood": "Jackson Ward",
    "address": "309 N Monroe St",
    "note": "Flag Store"
  },
  {
    "name": "Kings Fish Market",
    "neighborhood": "Jackson Ward",
    "address": "12 E Marshall St",
    "note": "Seafood Market"
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
