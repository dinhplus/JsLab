// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    // your code here
    return arr.filter(function(value) {
        return value >= 5;
    })
}


/**
 * Give a list of students, filter out non-female 
 */

var members = [
    { name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
];

function filterOutFemales(members) {
    // your code here
    return members.filter(function(obj) {
        return obj.gender != 'female';
    })
}
// newmem = filterOutFemales;

// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    // your code here!
    return arr.filter(function(value) {
        return value % 2 === 0;
    })
}




/** 
 * Filter các sản phẩm khi biết id danh mục sản phẩm
 * Ví dụ đây là 1 danh sách các danh mục sản phẩm, 
 * khi người dùng muốn lọc các sản phẩm thuộc danh mục nào 
 * thì filter các sản phẩm của danh mục đó.
 *    var categories = [
 *  { id: 1, name: 'Đồ điện tử'},
 *  { id: 2, name: 'Đồ gia dụng'},
 * { id: 3, name: 'Nội thất'}
 *  ];
 */

var listProducts = [
    { id: 1, categoryId: 1, name: 'Tivi' },
    { id: 2, categoryId: 1, name: 'Tủ lạnh' },
    { id: 3, categoryId: 3, name: 'Ghế sofa' },
    { id: 4, categoryId: 1, name: 'Máy giặt' },
    { id: 5, categoryId: 2, name: 'Chén bát' },
    { id: 6, categoryId: 2, name: 'Nồi cơm điện' },
    { id: 7, categoryId: 3, name: 'Cửa kính' },
    { id: 8, categoryId: 1, name: 'Điều hoà' },
    { id: 9, categoryId: 3, name: 'Bàn tròn' },
    { id: 10, categoryId: 2, name: 'Lò vi sóng' },
]

var categories = [
    { id: 1, name: 'Đồ điện tử' },
    { id: 2, name: 'Đồ gia dụng' },
    { id: 3, name: 'Nội thất' }
];

function filterProductsByCategoryId(products, categoryId) {
    // your code here! 
    result = products.filter(function(obj) {
        return obj.categoryId === categoryId;

    })
    return result;
}
console.log(filterProductsByCategoryId(listProducts, 2));





/**
 * Viêt hàm có sử dụng method filter để loại bỏ những phần tử bị lặp lại trong mảng:
 * Tìm hiểu thêm indexOf:
 * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * Example:
 * removeDuplicate([1, 1, 2, 3, 3]) // [1, 2, 3]
 * 
 */

function removeDuplicate(array) {
    // let template = array;

    for (var index = 0; index < array.length; index++) {
        do {
            let temp = array[index];
            var ind = array.indexOf(temp, index + 1);
            // console.log("index=" + index + ";   ind=" + ind + "; temp=" + temp);
            if (ind > 0) {
                array.splice(ind, 1);
            } else break;
        } while (ind > 0);
    }
    return array;
}
result = removeDuplicate([1, 1, 2, 3, 3, 6, 7, 3, 8, 5, 4, 9, 3, 5, 2, 1, 4]);
console.log(result);






// function rD(array) {
//     let id = -1;
//     return array.filter((value) => {
//         id += 1;
//         let carr = array.splice(id, 1);
//         return carr.includes(value);
//     });
// }
// console.log(
//     rD([1, 1, 2, 3, 3, 3, 5, 2, 1, 4])
// ); // [1, 2, 3]
// console.log([1, 1, 2, 3, 3, 3, 5, 2, 1, 4].indexOf(4));
// console.log([1, 1, 2, 3, 3, 3, 5, 2, 1, 4].indexOf(4));
// console.log([1, 1, 2, 3, 3, 3, 5, 2, 1, 4].indexOf(4));
// console.log([1, 1, 2, 3, 3, 3, 5, 2, 1, 4].indexOf(4));
// console.log([1, 1, 2, 3, 3, 3, 5, 2, 1, 4].indexOf(4));