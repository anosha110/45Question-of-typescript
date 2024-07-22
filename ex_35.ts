/* Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.
• Modify your program to print a statement about each animal, such as
A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would
make a great pet!*/

let Animals:string[]=['dog','cat','lion'];
for(let i=0; i<Animals.length;i++){
    console.log(`${Animals[i]}`);
}

for(let i=0; i<Animals.length;i++){
    console.log(`A ${Animals[i]} would make a great pet`);
}
console.log(`\n A dog would make a great pet.A cat would make a great pet.A lion would make a great pet`)