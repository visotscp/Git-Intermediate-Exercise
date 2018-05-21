var document = "";

// Suggestion data for Church Hill businesses
var data=[
	{
		"name": "Global Business Ventures",
		"neighborhood": "Church Hill",
		"note": "Business Management Consultant",
		"address": "423 N 18th Street"
	},
	{
		"name": "Media One",
		"neighborhood": "Church Hill",
		"note": "Business Management Consultant",
		"address": "1110 North 25th Street"
	},
	{
		"name": "Old House Authority Foundation",
		"neighborhood": "Church Hill",
		"note": "Business Management Consultant",
		"address": "2720 E Broad St"
	},
	{
		"name": "Restoration Builders of Virginia Inc.",
		"neighborhood": "Church Hill",
		"note": "General Contractor",
		"address": "2926 P St"
	},
	{
		"name": "Ebony Walden Consulting",
		"neighborhood": "Church Hill",
		"note": "Business Management Consultant",
		"address": "Church Hill"
	},
	{
		"name": "WPA Bakery",
		"neighborhood": "Church Hill",
		"note": "Hip bakeshop in a historic building with pastries, cakes &amp; coffee, plus gluten-free &amp; vegan options.",
		"address": "2707 E Marshall St"
	},
	{
		"name": "W & H Tax Services Inc.",
		"neighborhood": "Church Hill",
		"note": "Tax Preparation",
		"address": "2917 E Broad St"
	},
	{
		"name": "Cyclus Bike Shop",
		"neighborhood": "Church Hill",
		"note": "Bicycle Repair Shop",
		"address": "2225 E Clay St"
	},
	{
		"name": "Ernst & Young",
		"neighborhood": "Church Hill",
		"note": "Business Management Consultant",
		"address": "2100 E Cary St #201"
	},
	{
		"name": "Lambert Brice E",
		"neighborhood": "Church Hill",
		"note": "Personal Injury Attorney",
		"address": "321 N 23rd St"
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
