/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.*/


const friends:string[]=['messam','masoom','nitta','anosha','mahek','eisha'];
console.log(`table is not avaliable i can invite only two persons\n`);

// Remove guests from your list one at a time until only two names remain in your list.

let friends1=friends.pop();
console.log(`sorry ${friends1} you are not invited`);

let friends2=friends.pop();
console.log(`sorry ${friends2} you are not invited`);

let friends3=friends.pop();
console.log(`sorry ${friends3} you are not invited`);

let friends4=friends.pop();
console.log(`sorry ${friends4} you are not invited\n`);

// Print a message to each of the two people still on your list, letting them know they’re still invited.


for(let i=0; i<friends.length;i++){
    console.log(`${friends}you are still invited`);
}


/*
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.*/

friends.pop();
friends.pop();
console.log(friends);