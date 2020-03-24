var math = {
    add: function(a, b) {
        return a + b;
    },
    multiply: (a, b) => (a * b),
    sum: (array) => (array.reduce((currentResult, currentValue) => (currentResult + currentValue)))
        // function(array) {
        //         result = array.reduce(function(currentResult, currentValue) {
        //             return (currentResult + currentValue);
        //         })
        //         return result;
        //     }

};

module.exports = math;