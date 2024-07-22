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

function carDetails(manufacturer: string, modelName: string, ...additionalInfo: [string, any][]) {
    const car: { [key: string]: any } = { manufacturer, modelName };
    additionalInfo.forEach(info => {
        const [key, value] = info;
        car[key] = value;
    });
    return car;
}

const myCarDetails = carDetails("Toyota", "Civic", ['color', 'black'], ['year', 2024]);
console.log(myCarDetails);

