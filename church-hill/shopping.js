var document = "";

var data = [
  {
    "name": "Roaring Pines",
    "neighborhood": "Church Hill",
    "address": "2025 Venable St",
    "note": "Roaring Pines is a hardware store set-up with a soda fountain/coffee bar, rolled into one!"
  },
  {
    "name": "Dear Neighbor",
    "neighborhood": "Church Hill",
    "address": "2415 Jefferson Ave",
    "note": "Adorable gift shop with handmade jewelry, notebooks, candles, cards, etc."
  },
  {
    "name": "Tiny Space",
    "neighborhood": "Church Hill",
    "address": "2708 E. Marshall St.",
    "note": "Tiny Space features handpicked and handmade home goods, clothes, antiques, jewelry, accessories, vintage variabilities, books, games, oddities, vinyl recordings, and new works from makers and creators."
  },
  {
    "name": "Gather Home and Garden",
    "neighborhood": "Church Hill",
    "address": "2704 E Marshall St.",
    "note": "From house plants to one-of-a-kind hand-made findes, a diverse selection of goods produced by local artisans"
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
