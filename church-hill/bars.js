var document = "";
// Suggestion data for Church Hill Bars
var data = [
{
	"name":"Metzger Bar and Butchery",
	"neighborhood":"Church Hill",
	"address":"801 N 23rd St",
	"note":"Rustic-chic venture offering seasonal & sustainable German-inspired plates, plus wines by the glass"
	},
	{
	"name":"Patrick Henry's Pub and Grill",
	"neighborhood":"Church Hill",
	"address":"2300 E Broad St",
	"note":"Cozy pub in the historical Patrick Henry Inn offering American grub, draft beer & a charming patio."
	},
	{
	"name":"Poe's Pub",
	"neighborhood":"Church Hill",
	"address":"2706 E Main St",
	"note":"Live blues & Americana meet Southern eats at this homey pub in a white cottage hung with photos"
	},
	{
	"name":"7 Hills Brewing Company",
	"neighborhood":"Church Hill",
	"address":"115 S 15th St #100",
	"note":"Energetic gastropub featuring surf and turf & its own craft brews, plus growlers to go & a patio."
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
