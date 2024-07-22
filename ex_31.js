/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
var usernames2 = ['nitta', 'anosha', 'mesam', 'Admin', 'masoom', 'mahek'];
// Remove all usernames
// usernames2 = [];
// console.log(usernames2);
// Check if the list of users is empty
if (usernames2.length > 0) {
    for (var i = 0; i < usernames2.length; i++) {
        if (usernames2[i] == "Admin") {
            console.log("\nHello ".concat(usernames2[i], ", would you like to see a status report?\n"));
        }
        else {
            console.log("Hello ".concat(usernames2[i], ", thank you for logging in again!"));
        }
    }
}
else {
    console.log("We need to find some users!");
}
