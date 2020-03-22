// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    // your code here
    return arr.filter(function(value) {
        return value >= 5;
    })
}


/**
 * Give a list of students, filter out non-female 
 */

var members = [
    { name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
];

function filterOutFemales(members) {
    // your code here
    return members.filter(function(obj) {
        return obj.gender != 'female';
    })
}
// newmem = filterOutFemales;

// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    // your code here!
    return arr.filter(function(value) {
        return value % 2 === 0;
    })
}