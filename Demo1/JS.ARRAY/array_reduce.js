let a = [1, 2, 3, 4];
let result = a.reduce((acc, value) => {
    console.log(acc);
    return acc + value;
}, 3);

console.log("Last result is : ", result);