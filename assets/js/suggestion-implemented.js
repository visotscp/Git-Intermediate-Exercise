var document = "";

function printSuggestion(inputData) {
  console.group("Generating a suggestion");
  console.debug("Received input data: \n" + JSON.stringify(inputData, null, '  '));
  var sponsoredData = [];
  // iterate over array of suggestions and add sponsored suggestions to a new
  // sponsored array
  console.group("Checking for sponsored suggestions");
  for (var i = 0; i < inputData.length; i++) {
    console.debug("Evaluating: " + inputData[i].name);
    console.debug("  Sponsored: " + inputData[i].sponsored);
    if (inputData[i].sponsored === true) {
      sponsoredData.push(inputData[i]);
    }
  }
  console.debug("Sponsored suggestions: \n" + JSON.stringify(sponsoredData, null, '  '));
  console.groupEnd();

  // combine all input data with sponsored data; meaning sponsored posts are
  // twice as likely to be shown
  var suggestions = inputData.concat(sponsoredData);
  console.debug("Processed suggestions data: \n" + JSON.stringify(suggestions, null, '  '));

  // get a random suggestion and update the page with it
  var suggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
  console.group("Suggestion");
  console.log(JSON.stringify(suggestion, null, '  '));
  console.groupEnd();

  var html =
    '<div class="vcard">' +
      '<div class="org">' + suggestion.name;

  if (suggestion.sponsored) {
    var html = html + '<span id=sponsored>sponsored</span>';
  }

  html = html + '</div>' +
    '<div class="adr">' +
      '<div class="street-address">' + suggestion.address + '</div>' +
      '<span class="locality">Richmond</span>, ' +
      '<span class="state">VA</span>' +
    '</div>' +
    '<div class="note">' + suggestion.note + '</div>' +
  '</div>';

  document.getElementById("suggestion").innerHTML = html;

  console.groupEnd();
}
