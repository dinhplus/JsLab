var fs = require("fs");
var path = require("path");
/** Viết hàm lấy extension của một file
 * - Example:
 * - getExtensionFilename("abc.mp3") // "mp3"
 */
function getExtensionFilename(filename) {
    // viết code  ở đây.
    var extname = path.extname(filename);
    var temp = [];
    var result = "";
    for (let index = 0; index < extname.length; index++) {
        temp.push(extname[index]);
    }
    temp.shift();
    for (val of temp) {
        result += val;
    }
    return result;
}
// var res = getExtensionFilename("./text.md");
// console.log(res);

/** viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
 */
function findMax(a, b, c) {
    // viết code ở đây.
    let max = a > b ? a : b;
    max = max > c ? max : c;
    return max;
}
// var max = findMax(1, 3, 5);
// console.log(max);

/** viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không
 */
function startWith(str) {
    // viết code ở đây.
    result = str.slice(0, 4);
    console.log(result);
    if (result === "Java") {
        return true;
    } else return false;
}
// startWith("Javaasdkjl");

/**
 * - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
 *- Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
 *- Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
 * Example:
 * [1, -10, 5, 18, -9, 5] => 27
 */
function findMaxDiff(arr) {
    // viết code ở đây.
    if (arr.length < 2) {
        return 0;
    } else {
        maxDiff = Math.abs(arr[1] - arr[0]);
        for (let index = 1; index < arr.length; index++) {
            maxDiff =
                maxDiff > Math.abs(arr[index] - arr[index - 1]) ?
                maxDiff :
                Math.abs(arr[index] - arr[index - 1]);
        }
        return maxDiff;
    }
}
// console.log(findMaxDiff([1, -10, 5, 18, -9, 5]));

/**
 * Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
 *
 * input : string
 * output : true or false
 */
function equal_pt(str) {
    // viết code ở đây.
    let count_t = 0;
    let count_p = 0;
    for (value of str) {
        if (value === "p") count_p++;
        if (value === "t") {
            count_t++;
        }
    }
    if (count_p === count_t) {
        return true;
    } else {
        return false;
    }
}
// console.log(equal_pt("asdgalsuhdapqt"));

/**
 * viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
 * Tham số:
 *	- array: mảng gốc
 *	- n: số phần tử trả về
 */
function first(array, n) {
    // viết code ở đây.
    if (n === undefined) {
        return [array[0]];
    } else if (n <= 0) return [];
    else if (n >= array.length) return array;
    else {
        let result = [];
        for (let index = 0; index < n; index++) {
            result.push(array[index]);
        }
        return result;
    }
}

// console.log(first([2, 4, 3, 5, 6]));

/**
 * - Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
 * - Lưu ý cho chuỗi 'abcd' :
 * 	-  element    'a'|'b'|'c'|'d'
 *	 - 	index 	    0	|	1	|	2	|	3
 *  1. n = 1 ------------------- 'acd'
 *  2. n = 2 ------------------- 'abd'
 */
function omitCharAt(str, n) {
    // viết code ở đây.
    let strRaw = [];
    for (let value of str) {
        strRaw.push(value);
    }
    strRaw.splice(n, 1);
    let string = "";
    for (let val of strRaw) {
        string += val;
    }
    return string;
}
// var res = omitCharAt("bdsajkhd", 4);
// console.log(res);

/** Viết hàm nhận vào 2 số a, b
 * Trả về số gần 100 nhất
 * nearestTo100(89, 180) // 89
 */
function nearestTo100(a, b) {
    // viết code ở đây.
    return Math.abs(a - 100) < Math.abs(b - 100) ?
        Math.abs(a - 100) :
        Math.abs(b - 100);
}

/** Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào. *
 * Nếu có 1 số âm và một số dương thì trả về true.
 * Các trường hợp khác trả về false.
 * Số 0 là số không âm cũng không dương
 * Tham số:
 * - number1: số nguyên thứ nhất
 * - number2: số nguyên thứ hai
 */
function checkInt(number1, number2) {
    // viết code ở đây.
    if ((number1 < 0 && number2 > 0) || (number1 > 0 && number < 0)) return true;
    else return false;
}

/**
* Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu só đó và 13,
* nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.
* Example:
*- n = 20 // return 14
*- n = 5 // return 8

*/
function difference(n) {
    // viết code ở đây.
    return Math.abs(n - 13) > 13 ? 2 * Math.abs(n - 13) : Math.abs(n - 13);
}

/** Viết hàm pyString để tạo chuỗi mới thêm "Py" trước chuỗi nhập vào.
 *Nếu chuỗi đã cho đã bắt đầu bằng "Py" thì hãy trả về chuỗi gốc (không cần thêm).
 *Tham số:
 *- String: chuỗi nhập vào lúc đầu.
 */

function pyString(String) {
    // viết code ở đây.
    if (String.slice(0, 2) === "Py") return String;
    else {
        result = "Py" + String;
        return result;
    }
}
// console.log(pyString("Pyasdaisdhi"));

/**
 * - Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi
thành ký tự theo sau nó trong bảng chữ cái.
* -  Ví dụ: "Hello" chuyển thành "Ifmmp"
* Tham số:
* - String: chuỗi nhập vào ban đầu.
*/
function toNextChar(str) {
    // viết code ở đây.
    result = "";
    for (let index = 0; index < str.length; index++) {
        let charCode = str.charCodeAt(index);
        if (charCode == 90 || charCode == 122) {
            charCode = charCode - 25;
            result += String.fromCharCode(charCode);
        } else if (
            (65 <= charCode && charCode <= 89) ||
            (97 <= charCode && charCode <= 121)
        ) {
            charCode = charCode + 1;
            result += String.fromCharCode(charCode);
        }
    }

    return result;
}

/** viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
 * newString("1wyg5yhd45", 2) // "1w45"
 */
function newString(str, n) {
    // viết code ở đây.
    if (n <= 0) {
        return "";
    } else if (2 * n >= str.length) {
        return str;
    } else {
        startString = str.slice(0, n);
        endString = str.slice(str.length - n);
        return startString + endString;
    }
}

/**
 *  Write a function that splits an array (first argument) into groups
 ** the length of size(second argument) and returns them as a two-dimensional array.
 ** Example
 ** chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
 */
function chunkArrayInGroups(arr, size) {
    // write code here.
    if (size === undefined) {
        let size = 2;
    }
    if (size <= 0) {
        return [];
    } else if (size > arr.length + 1) {
        return arr;
    } else {
        let resultArray = [];
        for (let index = 0; index < arr.length; index = index + size) {
            let container = [];
            for (let ind = 0; ind < size; ++ind) {
                if (index + ind >= arr.length) {
                    break;
                }
                container.push(arr[index + ind]);
            }
            resultArray.push(container);
        }
        return resultArray;
    }
}
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));

/**
 * * Write a function return maximum possible sum of some of its k consecutive numbers
 ** (numbers that follow each other in order.) of a given array of positive integers
 */
function maxOfSumChain(arr, k) {
    // write code here.
    let maxSum = 0;
    for (let index = 0; index < arr.length - k; index++) {
        let momentSum = 0;
        for (let ind = index; ind < index + k; ind++) {
            momentSum += arr[ind];
        }
        maxSum = maxSum > momentSum ? maxSum : momentSum;
    }
    return maxSum;
}
// console.log(maxOfSumChain([1, 3, 2, 6, 2], 2));

/**
 ** Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.
*Input: dãy số

*Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất
**ví dụ:
*Input: [1,2,3,4,1,2,2,1]
*Output: [1,2]
*/

function findMostFrequent(arr) {
    var result = [];
    var temp = [];
    var maxFrequent = 1;
    var arrClone = arr.sort((a, b) => a - b);
    console.log(arrClone);
    let countFrequent = 1;
    for (let index = 0; index < arrClone.length; ++index) {
        if (!!arr[index + 1] && arrClone[index + 1] === arrClone[index]) {
            ++countFrequent;
        } else {
            if (countFrequent === maxFrequent) {
                temp.push(index);
            } else if (countFrequent > maxFrequent) {
                temp = [index];
                maxFrequent = countFrequent;
            }
            countFrequent = 1;
        }
    }
    for (const value of temp) {
        result.push(arrClone[value]);
    }
    return result;
}

// console.log(
//     findMostFrequent([4, 2, 2, 2, 1, 1, 3, 1, 3, 1, 2, 3, 4, 3, 1, 4, 2])
// );

/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example:
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/
function countOccurrences(array) {
    return array.reduce(function(currentResult, currentValue) {
        if (currentResult[currentValue]) currentResult[currentValue]++;
        else currentResult[currentValue] = 1;

        return currentResult;
    }, {});
}

/**
 *Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được
 *của hiệu 2 số bất kì trong dãy số
 ** Input: là một dãy số.
 ** Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.
 **Ví dụ:
 ** Input: [1, 2, 3, 8, 9]
 ** Output: 8 (là hiệu của 9 và 1)
 */
function findmaxDiff(arr) {
    // Viết code tại đây
    arr = arr.sort((a, b) => a - b);
    return arr[arr.length - 1] - arr[0];
}
// console.log(findmaxDiff([3, 9, 6, 2, -3, 4]));

/**
 **Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự
 *của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?
 ** Input: 2 chuỗi String
 ** Output: True hoặc False
 *ví dụ:
 ** Input: abc cba
 ** Output: True
 *--------------------
 ** Input: abx abb
 ** Output: False
 */

function rearrangeChar(str1, str2) {
    var newStringInArray1 = [];
    var newStringInArray2 = [];
    for (let index = 0; index < str1.length; index++) {
        let charCode = str1.charCodeAt(index);
        newStringInArray1.push(charCode);
    }
    for (let index = 0; index < str2.length; index++) {
        let charCode = str2.charCodeAt(index);
        newStringInArray2.push(charCode);
    }
    var sortedChar1 = newStringInArray1.sort((a, b) => a - b);
    var sortedChar2 = newStringInArray2.sort((a, b) => a - b);

    if (str1.length != str2.length) return false;
    else {
        for (let index = 0; index < str1.length; index++) {
            if (sortedChar2[index] != sortedChar1[index]) return false;
        }
        return true;
    }
}
// console.log(rearrangeChar("abcd", "bscd"));