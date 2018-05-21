var document = "";

//added suggestion data for The Fan Bars
  var data = [
    {
      "name":"The Jasper",
      "neighborhood":"The Fan",
      "address":"3113 W Cary St",
      "note":"Fast Service, Great cocktails"
    },
    {
      "name":"City Beach",
      "neighborhood":"The Fan",
      "address":"2416 W Cary St",
      "note":"very spacious, great drinks"
    },
    {
      "name":"Canon & Draw Brewing",
      "neighborhood":"The Fan",
      "address":"1529 W Main St",
      "note":"Cool spot!"
    },
    {
      "name":"social52",
      "neighborhood":"The Fan",
      "address":"2619 W Main St",
      "note":"Great Atmosphere!"
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
