/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement,
such as You really like bananas!*/


// let fruits=["apple",'banana','mango','orange'];

// if(fruits.includes("mango")){
//     console.log(`i like mango`)
// }else if(fruits.includes(`apple`)){
//     console.log(`i like apple`);
// }else {
//     console.log(`fruits are not avaliable`);
// }



let avaliableFruits="orange"
let fruits=["apple",'banana','orange'];

if(fruits.includes(avaliableFruits)){
    console.log(`i like ${avaliableFruits}`);

}else {
    console.log(`fruits are not avaliable`);
}