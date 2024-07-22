/* Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/
// function make_great()
var magicianNames2 = ["anosha", "nitta", "mesam", "masoom"];
var magicianNamesCopy = [magicianNames2];
function show_magicians(greet) {
    var greeting = "";
    for (var _i = 0, magicianNames2_1 = magicianNames2; _i < magicianNames2_1.length; _i++) {
        var item = magicianNames2_1[_i];
        greeting += "".concat(greet, " ").concat(item, "\n");
    }
    return greeting;
}
;
var greeting = show_magicians("hello,");
var made = greeting.split('\n');
console.log(made);
console.log(magicianNames2);
