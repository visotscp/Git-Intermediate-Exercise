// Suggestion data for Schockoe Bottom Shopping
var document = "";

var data = [
    {
        "name":"Rosewood Clothing Co",
        "neighborhood": "Schockoee bottom",
        "address" : "16 W Broad St,Richmond",
        "note" : "Women's Clothin g"
    },
    {
        "name":"Tiny Space ",
        "neighborhood": "Schockoee bottom",
        "address" : "2708 East Marshall St",
        "note" : "Home Decor"
    },
    {
        "name":"Dear Neighbor ",
        "neighborhood": "Schockoee bottom",
        "address" : "1717 E Main St, Richmond",
        "note" : "Gift Shop"
    },
    {
        "name":"Dransfield Jewelers ",
        "neighborhood": "Schockoee bottom",
        "address" : "1308 E. Cary St., Richmond",
        "note" : "Jewellary Shop"
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
