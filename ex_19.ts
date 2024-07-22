/* Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
of people you are inviting to dinner.*/

let friends:string[]=['nitta','anosha','mesam','masoom','mantasha'];


console.log(`i am invited ${friends.length} number of friends invited for dinner are these\n `)
for(let i=0; i<friends.length;i++ ){
    
    console.log(`${i+1}.${friends[i]}`)
}
