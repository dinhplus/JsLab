/**
 * Sử dụng vòng lặp while tính tổng các số lẻ nhỏ hơn x.
 */

function sum(x) {
    // viết code ở đây.
    let result = 0;
    let increNumber = 0;
    while (increNumber < x) {
        if (increNumber % 2 === 1) {
            result += increNumber;
        }
        ++increNumber;
    }
    return result;
}

/**
 * Sử dụng vòng lặp while để tìm bội số chung
 * lớn nhất của a và b trong khoảng từ 0 đến 1000.
 *  * Với a và b nhập vào từ bàn phím
 */
function greatestMultipliesCommon(numb1, numb2) {
    let result = 1000;

    while (result <= 1000 && result > 0) {
        result--;
        if (result % numb1 === 0 && result % numb2 === 0) break;
    }
    return result;
}
// var test = greatestMultipliesCommon(3, 5);
// console.log(test);

/**
 * Thử chạy code sau
 */
// var secretPassword = "coders.tokyo";
// var readline = require("readline-sync");

// var result = readline.question("Nhập vào mật khẩu");
// console.log(result);

/**
 * Viết đoạn chương trình yêu cầu người dùng nhập vào mật khẩu (để login vô máy tính chẳng hạn), nếu người dùng nhập sai, hiển thị ra "Wrong password", nhập đúng thì hiển thị ra "Welcome!"
 */
// function passwordValidator(passwordInputted) {
//     if (passwordInputted === secretPassword) console.log("Welcome!");
//     else console.log("Wrong password");
// }
// passwordValidator(result);

// a = "hello world";
// for (const iterator of a) {
//     console.log(iterator);
// }
/**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms
 */

function doAfter(func, x) {
    setTimeout(func, x);
}
doAfter(() => {
    console.log("ahihi");
}, 10001);