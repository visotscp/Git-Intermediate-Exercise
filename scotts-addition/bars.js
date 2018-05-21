var document = "";

var data = [

  {
  name:  "Ardent Craft Ales",
  neigborhood : "Scott's Addition",
  address : "3200 W Leigh St, Richmond, VA 23230",
  note : "Great selection of beer, friendly staff, ample seating, a great environment, and a food truck on site. (Dog Friendly)"
  },
  
  {
  name : "Isley Brewing Company",
  neigborhood : "Scott's Addition",
  address : "1715 Summit Ave, Richmond, VA 23230",
  note :"Great beers, cozy atmosphere, nice little place...  patio, live music." }, 
  
  {
  name : "Reservoir Distillery", 
  neigborhood : "Scott's Addition",
  address : "1800 Summit Avenue A",
  note: "Something a little more hard core. Very solid Whiskey all the way around. "},
  
  {
  name : "Courthouse Creek Cider",
  neigborhood : "Scott's Addition", 
  address : "In The Highpoint building @ 3300 W. Broad St.",
  note : "New location in Scott's Addition. Amazing cidery with a relaxed atmosphere. Delicious small bites and excellent service. Whether a date, family outing or large party- this is a top notch spot! Cheers!"}
  ]
  ;



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
