/*Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.*/
// function make_shirt(size:string, lable:string) {
// return size+lable;
// }
// let fun1 = make_shirt("large", " i love typescript")   ;
// console.log(fun1);
// function make_shirt( lable:string,size:string="large") {
//     return size+lable;
//     }
//     let fun = make_shirt(" i love typescript")   ;
//     console.log(fun);
// function make_shirt( lable:string,size:string="medium") {
//     return size+lable;
//     }
//     let fun3 = make_shirt(" i love typescript")   ;
//     console.log(fun3);
function make_shirt(lable, size) {
    if (size === void 0) { size = "a shirt of any size "; }
    return size + lable;
}
var fun3 = make_shirt(" i love typescript");
console.log(fun3);
