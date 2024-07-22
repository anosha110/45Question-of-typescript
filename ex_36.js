/*T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should print
a sentence summarizing the size of the shirt and the message printed on it.
Call the function.
*/
function make_shirt(size, label) {
    // return size+label;
    return "my shirt size ".concat(size, " and lable is").concat(label);
}
var make = make_shirt(38, " the monday");
console.log(make);
