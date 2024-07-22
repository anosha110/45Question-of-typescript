/* Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature.
Print the Object that’s returned to make sure all the information was
stored correctly.*/
// function carDetails(manufacturer:string, modelName:string,... additinalINfo){
//     const car={manufacturer,modelName,... Object.fromEntries(additinalINfo)};
//     return car;
// };
// const mycardetails= carDetails("toyota","civic"['color','black'],['year',2024]);
// console.log(mycardetails);
function carDetails(manufacturer, modelName) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, modelName: modelName };
    additionalInfo.forEach(function (info) {
        var key = info[0], value = info[1];
        car[key] = value;
    });
    return car;
}
var myCarDetails = carDetails("Toyota", "Civic", ['color', 'black'], ['year', 2024]);
console.log(myCarDetails);
