// import { fchown } from "fs";

/**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms VÀ trả về 1 promise để có thể gọi như sau
 */
function doAfter(func, times) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(func());
            reject("Error");
        }, times);
    });
}

function sayHello() {
    console.log("Hello");
}

function sayGoodbye() {
    console.log("Goodbye");
}

// doAfter(sayHello, 1000).then(sayGoodbye);
// Expect:
// Đợi 1s
// Hello
// Goodbye

/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */
// function countDown(x) {
//     var InvervalId = setInterval(function() {
//         console.log(x);
//         --x;
//         if (x === 0) {
//             clearInterval(InvervalId);
//             console.log("Happy New Year! ");
//         }
//     }, 1000);
// }

// countDown(5);

/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, trả về promise, promise này resolve sau khi đã đếm xong
 */
function countDown(x) {
    var promise = new Promise((resolve, reject) => {
        var InvervalId = setInterval(function() {
            console.log(x);
            --x;
            if (x === 0) {
                clearInterval(InvervalId);
                resolve("ss");
            }
            if (false) reject("err");
        }, 1000);
    });
    return promise;
}

function sayHappyNewYear() {
    console.log("Happy new year");
}

// countDown(5).then(sayHappyNewYear);

/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, trả về promise, promise này resolve sau khi đã đếm xong
 */
function countDown(x) {}

function sayHappyNewYear() {
    console.log("Happy new year");
}

countDown(5).then(sayHappyNewYear);