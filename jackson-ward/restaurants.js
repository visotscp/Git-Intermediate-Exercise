var document = "";

// Suggestion data for Jackson Ward Restaurants
var data = [
    {
      "name" : "Max's on Broad",
      "neighborbood" : "Jackson Ward",
      "address" : "305 Brook Rd, Richmond, VA 23220",
      "note" : "Modern European, Belgian, French"
    },
    {
      "name" : "Comfort",
      "neighborhood" : "Jackson Ward",
      "address" : "200 W Broad St, Richmond, VA 23220",
      "note" : "Southern"
    },
    {
      "name" : "Mama J's Kitchen",
      "neighborhood" : "Jackson Ward",
      "address" : "415 N 1st St, Richmond, VA 23219",
      "note" : "Soul Food"
    },
    {
      "name" : "Salt & Forge",
      "neighborhood" : "Jackson Ward",
      "address" : "312 N 2nd St, Richmond, VA 23219",
      "note" : "Sandwiches, Breakfast & Brunch, Salad"
    },
    {
      "name" : "Lucy's",
      "neighborhood" : "Jackson Ward",
      "address" : "404 N 2nd St, Richmond, VA 23219",
      "note" : "Breakfast & Brund, American, Sandwiches"
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
