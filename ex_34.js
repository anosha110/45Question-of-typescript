/*Pizzas: Think of at least three kinds of your favorite pizza. Store these
pizza names in a array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza
instead of printing just the name of the pizza. For each pizza you should
have one line of output containing a simple statement like I like pepperoni
pizza.

• Add a line at the end of your program, outside the for loop, that states
how much you like pizza. The output should consist of three or more lines
about the kinds of pizza you like and then an additional sentence, such as
I really love pizza!*/
var pizza = ['chicken', 'pepperoni', 'beaf'];
for (var i = 0; i < pizza.length; i++) {
    console.log("".concat(pizza[i]));
}
// print a sentence using the name of the pizza
for (var i = 0; i < pizza.length; i++) {
    console.log(" i like ".concat(pizza[i], " pizza"));
}
console.log("\n i really love to eat pizza.Some of my favorites include Margherita, Pepperoni, and BBQ Chicken.I enjoy trying different kinds of pizzas with unique toppings");
