var document = "";

// Suggestion data for Jackson Ward Bars
var data = [
    {
      "name": "GWARbar",
      "neighborhood": "Jackson Ward",
      "address": "217 W Clay St",
      "note":
        "Fake blood-splattered Restaurant &amp; Bar offering meat &amp; vegan pub fare inspired by the heavy metal band GWAR."
    },
    {
      "name": "Secret Sandwich Society",
      "neighborhood": "Jackson Ward",
      "address": "501 E Grace St",
      "note": "It's a secret."
    },
    {
      "name": "The Rogue Gentlemen",
      "neighborhood": "Jackson Ward",
      "address": "618 N 1st St",
      "note":
        "Our award-winning cocktail program is consistently voted as one of the best in Richmond."
    },
    {
      "name": "Saison",
      "neighborhood": "Jackson Ward",
      "address": "23 W Marshall St",
      "note":
        "Saison focuses on bringing locally grown &amp; seasonal foods, reimagined Southern cuisine, Latin American dishes, craft beer &amp; specialty cocktails to RVA."
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
