var document = "";

// Suggestion data for Church Hill Restaurants
var data = [
{
"name": "Metzger Bar and Butchery",
"neighborhood": "Church Hill",
"address": "801 N 23RD ST RICHMOND, VA 23223",
"note": "RUSTIC, SEASONAL, GERMAN-INFLUENCED FOOD, WINE, AND COCKTAILS"
},
{
"name": "Millie's Diner",
"neighborhood": "Church Hill",
"address": "2603 E Main St, Richmond, VA 23223",
"note": "Though diner decor remains, this reincarnated eatery serves seasonal eclectic fare & unusual wines."
},
{
"name": "Dutch & Co",
"neighborhood": "Church Hill",
"address": "400 N 27th St, Richmond, VA 23223",
"note": "A  COZY & QUAINT RESTAURANT TUCKED INTO THE HISTORIC DISTRICT OF CHURCH HILL, RICHMOND, VIRGINIA. DUTCH & COMPANY ENJOYS THE REGIONAL INFLUENCE OF  VIRGINIA, UTILIZING SEASONAL INGREDIENTS, TRADITIONAL COOKING TECHNIQUES, ALL THE WHILE INSPIRED BY THE CUISINES OF THE WORLD."
},
{
"name": "The Roosevelt",
"neighborhood": "Church Hill",
"address": "623 North 25th Street, Richmond, Virginia 23223",
"note": "Acclaimed New Southern fare in a homey, country-chic space with craft cocktails & Virginia wines."
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
