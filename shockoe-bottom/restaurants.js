var document = "";

var data = [
  {
		"name": "Millie’s",
		"neighborhood": "Shockoe Bottom",
		"address": "2603 E Main St",
		"note": "$$  American (New), Breakfast & Brunch, Bars"
	},
	{
		"name": "LuLu’s",
		"neighborhood": "Shockoe Bottom",
		"address": "21 N 17th St",
		"note": "$$  American (New), Breakfast & Brunch, Bars"
	},
	{
		"name": "Bottoms Up Pizza",
		"neighborhood": "Shockoe Bottom",
		"address": "1700 Dock St",
		"note": "$$  Pizza"
	},
	{
		"name": "The Boathouse at Rocketts Landing",
		"neighborhood": "Shockoe Bottom",
		"address": "4708 E Old Main St",
		"note": "$$$  Seafood, Venues & Event Spaces, Bars"
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
