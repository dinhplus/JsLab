/** 
 * Dùng vòng lặp for kiểm tra số nguyên tố.
 * @param {number} x Số cần kiểm tra
 * @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false.
 */
// var x = 0;

function isPrimeNumber(x) {
    // viết code ở đây.
    if (x < 2) return false
    else if (x == 2 || x == 3) return true
    else if (x > 3) {
        var checkbool1 = 1;
        loop1:
            for (index = 2; index < (x / 2); ++index) {

                if (x % index == 0) {

                    checkbool1 = 0;
                    break loop1;
                }

            }
        if (checkbool1 == 0) return false;
        else return true;



    }
}
console.log(isPrimeNumber(152));

/**
 * Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: String.fromCharCode(97)) sẽ trả về ký tự"a" 
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */

function fromCharCode() {
    // viết code ở đây.
    for (i = 97; i <= 122; ++i) {
        console.log(String.fromCharCode(i));
    }
}
fromCharCode();


/**
 * Sử dụng vòng lặp for để tính tổng các số có trong mảng:
 */

function sum(array) {
    // viết code ở đây.
    var Sum = 0;
    for (let index = 0; index < array.length; index++) {
        Sum += array[index];

    }
    return Sum;
}

sum([1, 2, 3, 5, 64, 4562, 234]);



// tính tổng của tích của các phần tử của array a với các phần tử của array b.
/**
 * var a = [1, 2, 3];
 * var b = [10, 20];
 * Kết quả mong muốn: 180 // (10 + 20 + 30) + (20 + 40 + 60)
 */
var a = [1, 2, 3];
var b = [10, 20];

function sumMultiplyArray(a, b) {
    // viết code ở đây.
    var SumMultiply = 0;
    for (let indexa = 0; indexa < a.length; ++indexa) {
        for (let indexb = 0; indexb < b.length; ++indexb) {
            SumMultiply += a[indexa] * b[indexb];

        }

    }
    return SumMultiply;
}
console.log(sumMultiplyArray(a, b));


/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end 
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
function calculate(start, end) {
    // viết code ở đây.
    var result = 1;
    for (let index = start; index < end; index++) {
        result *= index;
    }
    return result;
}
console.log(calculate(2, 14));


/**
*  Sử dụng vòng lặp for viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
*  Tham số:
*- array: mảng cần kiểm tra
*- value: giá trị cần kiểm tra xem có tồn tại trong array không
* Return:
*- true nếu có tồn tại
*- false nếu không tồn tại

*/
function has(array, value) {
    // viết code ở đây
    var checkExit = 0;
    for (index = 0; index < array.length; index++) {
        if (value === array[index]) {
            checkExit = 1;
            break;
        };
    }
    if (checkExit === 0) return false
    else return true;
}

console.log(has([2, 42, 123, 32, 123], 23));