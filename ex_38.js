/* Cities: Write a function called describe_city() that accepts the name of
a city and its country. The function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the
default country.
*/
function describe_city(cityName, country) {
    if (country === void 0) { country = "pakistan"; }
    return "".concat(cityName, " is in ").concat(country, " ");
}
var city1 = describe_city("karachi");
var city2 = describe_city("hyderabad");
var city3 = describe_city("shahdadpur");
var city4 = describe_city("UAE", "ind");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
