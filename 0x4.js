let myCommutes = ["Car", "bus",  "rental bike"];

let myFavouriteCommute = {
    type: "Car",
    route: 1,
    print: "Stickers",
    hasMiddleDoor: true,
    drivers: ["Me"]
};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " 
    + myCommutes[0] + ", " + myCommutes[5] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " 
    + myFavouriteCommute.type + ", route number " 
    + myFavouriteCommute.route + ", the best driver: " 
    + myFavouriteCommute.drivers[0] + "</p>";

$(document).ready(function () {
    $("#output").html(megaSentence);
});
