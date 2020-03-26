/** Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào
 */
function powerup(arr) {
    // your code here!
    return arr.map((value) => {
        if (value % 2 === 0) return Math.power(value, 2)
        else return value;
    })
}

/**
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round
 */

let marks = [8, 8, 6.75];

function average(arr) {
    // your code here!
    return Math.round(
        (arr.reduce(
            (CurrentValue, CurrentElement) =>
            (CurrentValue + CurrentElement)
        )) / arr.length)
}

console.log(average(marks));

/**
 * Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
 * Yêu cầu sử dụng Math Object
 */

function positiveNumber(arr) {
    return arr.map((value) => (Math.abs(value)));
}

/** Viết hàm random để in ra một số ngẫu nhiên từ 1 - 100
 */
function random() {
    // your code here!
    var value = 1 / Math.random();
    var result = Math.round(value % 100);
    if (result === 0) result = 100;
    return result;
}
// console.log(random());

/**
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không?
 */

function rightTriangle(a, b, c) {
    // your code here
    let a2 = Math.pow(a, 2);
    let b2 = Math.pow(b, 2);
    let c2 = Math.pow(c, 2);
    if (a === 0 || b === 0 || c === 0) return false
    else if (a2 === b2 + c2 || b2 === a2 + c2 || c2 === a2 + b2) return true
    else return false;

}

/**
 * Viết hàm circumferenceOfCircle() tính chu vi và hàm acreageOfCircle() tính diện tích hình tròn
 * khi biết bán kính
 * Với PI = 3.14
 */

function circumferenceOfCircle(r) {
    // your code here!
    return Math.PI * r * 2;
}

function acreageOfCircle(r) {
    return Math.PI * Math.pow(r, 2);
}

/**
 * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
 * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
 * Gợi ý: Sử dụng toFixed() method
 */

function trigonim(number) {
    var result = [];
    var sinNumber = Math.sin(number).toFixed(3);
    var cosNumber = Math.cos(number).toFixed(3);
    var tanNumber = Math.tan(number).toFixed(3);
    result = result.concat(sinNumber, cosNumber, tanNumber);
    return result;
}
// console.log(trigonim(23));