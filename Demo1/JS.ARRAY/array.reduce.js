// Turn an array of voter objects into a count of how many people voted
/**
 * a b c d x y z 
 * testing----
 * dnskjfndsnf;sldhj
 * kjhkjhkjhkjhkjhukjhkjh
 */



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
        if (currentValue.voted === true) return accumulator + currentValue.voted;
        else return accumulator;
    }, 0)

    return result;
}
// console.log(totalVotes(voters));


/**
 *  Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
 */
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(arr) {
    // Write code here...
    return arr.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue.price;
        }, 0

    )


}

// console.log(shoppingSpree(wishlist));

/**
 *  Given an array of all your wishlist items, returns an array of titles
 */
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function arrayTitle(wishlist) {
    return wishlist.reduce(function(accumulator, currentValue) {
            // console.log(accumulator);
            accumulator.push(currentValue.title);
            return accumulator;
        }, []

    )
}
// console.log(arrayTitle(wishlist));
// [ 'Tesla Model S', '4 carat diamond ring', 'Fancy hacky Sack', 'Gold fidgit spinner', 'A second Tesla Model S' ]




/** Given an array of arrays, flatten them into a single array
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

let arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

function flatten(arr) {
    // viết code ở đây.
    return arr.reduce(function(currentResult, currentValue) {
        console.log(currentResult)
        return currentResult.concat(currentValue);
    }, [])
}
// console.log(flatten(arrays));

/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

function countOccurrences(arr) {
    return arr.reduce(function(currentResult, currentValue) {
        if (currentResult[currentValue]) currentResult[currentValue]++
            else currentResult[currentValue] = 1;

        return currentResult;
    }, {})

}

// console.log(countOccurrences(['a', 'b', 'c', 'b', 'a']));

/** Count the occurrences of each element inside an array using reduce
 */
function countOccurrences_2(arr) {
    return arr.reduce(function(x, y) {
        if (typeof x[y] === 'undefined') x[y] = 1;
        else x[y] += 1;
        return x;
    }, {});
}
// countOccurrences_2(['a', 'b', 'c', 'b', 'a']);