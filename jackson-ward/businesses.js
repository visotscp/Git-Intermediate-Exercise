var document = "";

// Suggestion data for Jackson Ward Businesses
var data = [
{
"name": "Historic Jackson Ward Association",
"neighborhood": "Jackson Ward",
"address": "501 N. 2nd Street, Richmond, VA 23219",
"note": "Manages all Jackson Ward, 'historic' businesses"
},
{
"name": "True Health Diagnostics",
"neighborhood": "Jackson Ward",
"address": "737 N 5th Street, Richmond, VA 23219",
"note": "Innovative medical lab"
},
{
"name": "Barnes & Noble",
"neighborhood": "Jackson Ward",
"address": "601 N 10th St, Richmond, VA 23298",
"note": "MCV Bookstore"
},
{
"name": "Altria Center For Research and Technology",
"neighborhood": "Jackson Ward",
"address": "601 E Jackson St, Richmond VA 23219",
"note": "Phillip Morris lab"
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
