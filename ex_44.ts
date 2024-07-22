/* Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.*/

function Sandwiches(...items:string[]){
    return `i like Sandwiche of ${items}`;
};
let types = Sandwiches("cheez", "chicken", "lettuce");

let types2 = Sandwiches("turkey", "italian");
let types3 = Sandwiches();
console.log(types);
console.log(types2);
console.log(types3);