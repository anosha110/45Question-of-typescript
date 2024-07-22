/* Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.*/


let magicianNames = ["anosha", "nitta", "mesam", "masoom"];

function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

show_magicians(magicianNames);
show_magicians(magicianNames);
