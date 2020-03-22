// Turn an array of voter objects into a count of how many people voted

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

function totalVotes(arr) {
    // let counter = 0;
    var result = arr.reduce(function(accumulator, currentValue) {
        // var counter = 0;
        if (currentValue.voted === true) return accumulator + currentValue
        else return accumulator;
    })

    return result;



}
console.log(totalVotes(voters));