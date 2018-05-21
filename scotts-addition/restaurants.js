var document = "";

var data = [
  {
    "name": "Peter Chang",
    "neighborhood": "Scott's Addition",
    "address": "2816 W Broad St",
    "note": "Hip spot for contemporary chinese eats."
  },
  {
    "name": "Buz and Ned's",
    "neighborhood": "Scott's Addition",
    "address": "1999 N Boulevard",
    "note": "Smokehouse mainstay with Microbrews."
  },
  {
    "name": "Sabai",
    "neighborhood": "Scott's Addition",
    "address": "2727 W Broad St",
    "note": "Thai street food in a funky bar/eatery."
  },
  {
    "name": "En Su Boca",
    "neighborhood": "Scott's Addition",
    "address": "1001 N Boulevard",
    "note": "Tex-Mex plates & drinks until late."
  },
  {
    "name": "Stella's",
    "neighborhood": "Scott's Addition",
    "address": "1012 Lafayette St",
    "note": "Greek bistro with modern eats & decor."
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
