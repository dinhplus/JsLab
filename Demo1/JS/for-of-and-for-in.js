/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) {
    // Write code here...
    var result = 1;
    for (const key of arr) {
        result = result * key;
    };
    return result;

}
var m = multiply([1, 2, 3, 4, 5, 6]);
console.log(m);


/**
 * Sử dụng vòng lặp for...in để lấy về tất cả các key của object sau, 
 * in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
    bedroom: {
        area: 20,
        bed: {
            type: 'twin-bed',
            price: 100
        }
    }
};
var result = [];

function getObjectKey(obj) {
    // Write code here...

    for (var key in obj) {
        result.push(key);
        if (typeof obj[key] === 'object') getObjectKey(obj[key]);

    }
    return result;
}


console.log(getObjectKey(apartment))



/**
 * viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
 * Tham số:
 *  - object: object cần kiểm tra
 *  - key: key cần kiểm tra xem có tồn tại trong object không
 * Return:
 *  - true nếu có tồn tại
 *  - false nếu không tồn tại
 */

function has(object, key) {
    // for (const key in object) {
    if (object.hasOwnProperty(key)) {
        return true

    } else return false;
    // }

}
console.log(has(apartment, "aws"));


/** Method of an arry
 * - a.concat(b) Noi b vao a
 * - a.push(b):  cho một phần tử mới vào trong mảng và cho vào vị trí cuối cùng
 * - a.pop() đẩy phần tử cuối cùng ra khỏi mảng
 * - a.shift() : lấy phần tử đầu tiên của mảng ra khỏi mảng, ta được mảng mới
 * - a.unshift() : thếm 1 phần tử mới vào vị trí đầu tiên của mảng, được mảng mới
 * 
 *  - Array.prototype.splice() thay đổi nội dung của mảng được gọi ngay lập tức theo tham số  mà nó được truyền vào, nội dung thay đổi bao gồm thêm/loại bỏ giá trị n
    tại vị trí mà nó được gọi 
 * - Array.prototype.slice() tạp ra một bản sao/trích dẫn dạng mảng cuả mảng được gọi đến, bắt đầu từ vị trí index_start và kết thúc trước vị trí index_end một chỉ số, 
 * 
 */





/** 
 * Viết function trả về n phần tử đầu tiên có trong mảng.
 */

function first(arr, n) {
    // your code here...
    return arr.slice(0, n);
}

console.log(first([1, 2, 3], 2)); // expect [1, 2]


/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
function removeEnd(arr, n) {
    for (let index = 0; index < array.length - n; index++) {
        arr.pop();

    }
}