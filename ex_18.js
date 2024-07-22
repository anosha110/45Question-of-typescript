/*18. Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its
order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
var visitplaces = ['karachi', 'lahore', 'Islamabad', 'murree', 'sialkot', 'multan'];
// console.log(visitplaces);
// • Print your array in alphabetical order without modifying the actual list.
var copyarry = visitplaces.slice();
var sortarry = copyarry.sort();
// console.log(sortarry);
// Show that your array is still in its original order by printing it.
// console.log(visitplaces);
// Print your array in reverse alphabetical order without changing the order of the original list.
var copyarry2 = visitplaces.slice();
var reverscopyarry = copyarry2.reverse();
// console.log(reverscopyarry);
// console.log(visitplaces);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
var reverscopyarry2 = visitplaces.reverse();
// console.log(reverscopyarry2);
var againreverse = reverscopyarry2.reverse();
// console.log(againreverse);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
var sortcopy = visitplaces.sort();
console.log(sortcopy);
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
var reversecopyarry = sortcopy.reverse();
console.log(reverscopyarry);
