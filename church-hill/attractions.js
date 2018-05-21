var document = "";

var data=[
  {
  "name":"Libby Hill Park",
  "neighborhood":"Church Hill",
  "address":"2801 E Franklin St",
  "note":"One of the earliest city parks, this elevated green space offers scenic views, benches & tall trees."
  },
  {
  "name":"Edgar Allan Poe Museum",
  "neighborhood":"Church Hill",
  "address":"1914 E Main St",
  "note":"Self guided tour."
  },
  {
  "name":"The American Civil War Museum- White House and Museum of the Confederacy",
  "neighborhood":"Church Hill",
  "address":"1201 E Clay St",
  "note":"The largest Confederate collection, interpretive exhibits & tours of the Confederate White House."
  },
  {
  "name":"The John Marshall House",
  "neighborhood":"Church Hill",
  "address":"818 E Marshall St",
  "note":"Historic home of a 19th-century Supreme Court justice preserves period furnishings & architecture."
  },
  {
    "name":"Virginia Holocaust Museum",
    "neighborhood":"Church Hill",
    "address":"2000 E Cary St",
    "note":"Free museum featuring powerful exhibits on the Holocaust & the survivors who settled in Richmond."
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
