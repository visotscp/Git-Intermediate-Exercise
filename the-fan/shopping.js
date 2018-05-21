var document = "";
//suggestion data for The Fan
var data = [
  {
   "name":"lunar hippie",
   "neighborhood":"The Fan",
   "address":"Main St",
   "note":"incense"
  },
  {
   "name":"Mod & Soul",
   "neighborhood":"The Fan",
   "address":"Broad St",
   "note":"private events"
  },
 {
   "name":"fabrik",
   "neighborhood":"The Fan",
   "address":"Carytown",
   "note":"clothes"
 },
 {
   "name":"claires",
   "neighborhood":"The Fan",
   "address":"Willow Lawn",
   "note":"nose rings"
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
