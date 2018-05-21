var document = "";

var data=[
  {
    "name":"Two Pillars Tattoo & Sign Shop",
    "neighborhood":"Northside",
    "address":"224 W Brookland Park Blvd, Richmond, VA 23222",
    "note":"Nice Tattoos"
  },
  {
    "name":"Little House Green Grocery",
    "neighborhood":"Northside",
    "address":"1227 Bellevue Ave, Richmond, VA 23227",
    "note":"Neighborhood Grocery"
  },
  {
    "name":"Northside Hardware Store",
    "neighborhood":"Northside",
    "address":"2925 North Ave, Richmond, VA 23222",
    "note":"Neighborhood Hardware store"
  },
  {
    "name":"Balance Bicycle Shop",
    "neighborhood":"Northside",
    "address":"904 W Broad St, Richmond, VA 23220",
    "note":"Bicycle store"
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
