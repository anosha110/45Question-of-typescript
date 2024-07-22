// /*Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.*/
// let magicianNames = ["anosha", "nitta", "mesam", "masoom"];
// function show_magicians(magicians: string[]) {
//     for (let magician of magicians) {
//         console.log(greet,magician);
//     }
// }
// show_magicians(magicianNames);
// show_magicians(magicianNames);
// let magicianNames = ["anosha", "nitta", "mesam", "masoom"];
// function show_magicians(magicians: string[]) {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }
// function make_great(magicians: string[]): string[] {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = "the Great " + magicians[i];
//     }
//     return magicians;
// }
// magicianNames = make_great(magicianNames);
// show_magicians(magicianNames);
// let magicianNames=
var magicianNames = ["anosha", "nitta", "mesam", "masoom"];
function show_magicians(greet) {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var item = magicianNames_1[_i];
        console.log(greet, item);
    }
}
;
show_magicians("hello,how are you");
