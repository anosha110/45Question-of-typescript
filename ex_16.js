/*More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
var friends = ['messam', 'masoom', 'nitta'];
console.log(friends);
console.log("we have 3 more friends to invite for dinner\n");
friends.unshift("anosha");
friends.splice(2, 0, 'mahke');
friends.push("eisha");
console.log(friends);
for (var i = 0; i < friends.length; i++) {
    console.log("".concat(friends[i], ", your invited for dinner"));
}
