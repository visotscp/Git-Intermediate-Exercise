var document = "";

var data = [
              {
              "name": "Richmond Bicycle Studio",
              "neighborhood": "Scott's Addition",
              "address": "1717 Summit Ave, Richmond, VA 23230",
              "note": "Bicycle store"
              },

              {
                "name": "Eviction",
                "neighborhood": "Scott's Addition",
                "address": "2943 W Marshall St, Richmond, VA 23230",
                "note": "furniture store"
              },

              {
                "name": "Truck Tires Shop",
                "neighborhood": "Scott's Addition",
                "address": "1707 Summit Ave, Richmond, VA 23230",
                "note": "Tire store"
              },

              {
                "name": "Classic Tattoo",
                "neighborhood": "Scott's Addition",
                "address": "3121 W Marshall St, Richmond, VA 23230",
                "note": "Tattoo store"
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
