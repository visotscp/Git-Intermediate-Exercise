var document = "";

var data = [
    {
        "name": "Lewis Ginter",
        "neighborhood": "NorthSide",
        "address": "1800 Lakeside Ave, Henrico, VA 23228",
        "notes": "Botanical Gardens"
    },
    {
        "name": "Bryan Park",
        "neighborhood": "NorthSide",
        "address": "4308 Hermitage Rd, Richmond, VA 23227",
        "notes": "Historical Significance"
    },
    {
        "name": "Richmond Raceway",
        "neighborhood": "NorthSide",
        "address": "600 E Laburnum Ave, Richmond, VA 23222",
        "notes": "NASCAR"
    },
    {
        "name": "The First Tee of Greater Richmond",
        "neighborhood": "NorthSide",
        "address": "400 School St, Richmond, VA 23222",
        "notes": "Driving Range"
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
