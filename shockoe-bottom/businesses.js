var document = "";

var data =  [{

 		"name": "Main Street Station",
 		"neighborhood": "Shockoe Bootom",
 		"address": "16th and Main",
 		"note": "AmTrak Railway, Party & Conference Rooms, Stores"
 	},
 	{
 		"name": "Main Street Market",
 		"neighborhood": "Shockoe Bootom",
 		"address": "17th and Main",
 		"note": "Fresh fruits, vegetables and flowers"
 	},
 	{
 		"name": "CarMax - Shockoe Location",
 		"neighborhood": "Shockoe Bootom",
 		"address": "13th and Cary",
 		"note": "CarMax Marketing Department"
 	},
 	{
 		"name": "7 Hills Brewing Company",
 		"neighborhood": "Shockoe Bootom",
 		"address": "115 S 15th St #100",
 		"note": "Friendly workers, Great music and Awesome ambience"
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
