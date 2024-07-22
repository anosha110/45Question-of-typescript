/*
3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/


const personName:string="anosha";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
let firstLatter:string=personName.charAt(0).toUpperCase();
let restLatter:string=personName.slice(1).toLocaleLowerCase();
let titlecase=firstLatter+restLatter;
console.log(titlecase);
