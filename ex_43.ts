/* Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/

// function make_great()

let magicianNames2 = ["anosha","nitta","mesam","masoom"];

let magicianNamesCopy=[magicianNames2];

function show_magicians(greet:string){
    let greeting ="";
    for (let item of magicianNames2){
        greeting += `${greet} ${item}\n`;
    }
    return greeting;
};

 let greeting=show_magicians("hello,");
 let made=greeting.split('\n');
 console.log(made);
 console.log(magicianNames2);