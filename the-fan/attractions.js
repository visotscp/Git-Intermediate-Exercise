var document = "";

var data = 
[{
  "name":"Byrd Theater",
  "neighborhood": "The Fan",
  "address": "2908 W Cary St.",
  "note": "Fun, unique cinema experience"
},
{
"name":"Virginia Museum of fine arts",
  "neighborhood": "The Fan",
  "address": "200 N Boulevard",
  "note": "More than 5000 years of art from around the world"


},
{
"name":"Bygones Vintage Clothing",
  "neighborhood": "The Fan",
  "address": "2916 W Carry St.",
  "note": "Step back in time"

},
{
"name":"Carytown",
  "neighborhood": "The Fan",
  "address": "3166 W Cary St.",
  "note": "History repurposed!!"

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
