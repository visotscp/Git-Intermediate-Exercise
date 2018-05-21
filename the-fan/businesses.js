var document = "";

var data = [
  {
    "name":"U.S. Electric Co. Inc.",
    "neighborhood":"The Fan",
    "address":"2403 W Main St, Richmond, VA 23220",
    "note":"Electrician"
  },
  {
    "name":"Wythken Printing",
    "neighborhood":"The Fan",
    "address":"911 W Grace St, Richmond, VA 23220",
    "note":"Commercial Printer"
  },
  {
    "name":"Kroger",
    "neighborhood":"3507 W Cary St, Richmond, VA 23221",
    "address":"The Fan",
    "note":"Grocery Store"
  },
  {
    "name":"The Fresh Market",
    "neighborhood":"The Fan",
    "address":"10 N Nansemond St ste b, Richmond, VA 23221",
    "note":"Grocery Store"
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
