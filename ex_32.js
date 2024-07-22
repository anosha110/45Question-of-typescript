/* Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users.
Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used.
If it has, print a message that the person will need to enter a
new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
var current_users = ['nitta', 'anosha', 'mesam', 'masoom', 'mahek'];
var new_users = ['Musa', 'Haider', 'madad', 'Mohsin', 'Mesam']; // included one username that is also in current_users
new_users.forEach(function (new_user) {
    var new_user_lower = new_user.toLowerCase();
    var usernameTaken = current_users.some(function (current_user) { return current_user.toLowerCase() === new_user_lower; });
    if (usernameTaken) {
        console.log("".concat(new_user, " needs to choose a new username because it's already taken."));
    }
    else {
        console.log("".concat(new_user, " is available."));
        current_users.push(new_user);
    }
});
console.log(current_users);
