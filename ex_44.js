/* Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.*/
function Sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return "i like Sandwiche of ".concat(items);
}
;
var types = Sandwiches("cheez", "chicken", "lettuce");
var types2 = Sandwiches("turkey", "italian");
var types3 = Sandwiches();
console.log(types);
console.log(types2);
console.log(types3);
