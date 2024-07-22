/* Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
of people you are inviting to dinner.*/
var friends = ['nitta', 'anosha', 'mesam', 'masoom', 'mantasha'];
console.log("i am invited ".concat(friends.length, " number of friends invited for dinner are these\n "));
for (var i = 0; i < friends.length; i++) {
    console.log("".concat(i + 1, ".").concat(friends[i]));
}
