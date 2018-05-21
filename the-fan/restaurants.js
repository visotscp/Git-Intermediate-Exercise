var document = "";

var data = [
  {
    "name":"Social52 Kitchen & Craft Bar",
    "neighborhood":"The-Fan",
    "address":"2619 W Main St, Richmond, VA 23220",
    "note":"Wood-paneled digs with sports on TV where casual American eats come with beers, sangria & cocktails."
  },
  {
  "name":"Sticky Rice",
  "neighborhood":"The-Fan",
  "address":"2232 W Main St, Richmond, VA 23220",
  "note":"Hipster student hangout for Japanese maki, sticky balls & veggie dishes paired with PBR & karaoke."
  },
  {
  "name":"LEVEL Restaurant & Bar",
  "neighborhood":"The-Fan",
  "address":"2007 W Broad St, Richmond, VA 23220",
  "note":"Clubby, open hot spot offering clever sushi rolls, Asian fusion mains & build-your-own beer flights."
  },
  {
  "name":"Foo Dog",
  "neighborhood":"The-Fan",
  "address":"1537 W Main St, Richmond, VA 23220",
  "note":"Chill eatery with manga-inspired decor serving fried tofu, ramen & other Asian eats with craft beer."
  },
  {
  "name":"The Savory Grain",
  "neighborhood":"The-Fan",
  "address":"2043 W Broad St, Richmond, VA 23220",
  "note":"Farm-fresh eats & local craft beers are the draw at this New American spot with weekly blues music."
  },
  {
    "name":"The Naked Onion",
    "neighborhood":"The-Fan",
    "address":"2118 W Cary St, Richmond, VA 23220",
    "note":"Simple counter-service kitchen popular for its pork belly banh mi & other eclectic sandwiches."
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
