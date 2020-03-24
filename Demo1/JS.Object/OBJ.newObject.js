/**
 * 1. Tạo một đối tượng student gồm các property name, sex, age
 * 2. Example:
 * - name: "CodersX",
 * - sex: "Male",
 * - age: 1
 * 3. Viết hàm showInfo trả về object đó
 */

var student = {
    name: " Student's Name",
    sex: " Male",
    age: "20"
}

function showInfo(obj) {
    // viết code ở đây
    return obj;
}

/**
 *-  Viết hàm xoá thuộc tính (prop) khỏi object student
 *-  Trả về object đã được xoá
 *- Example:
 *-  removeProp("name") = { class: “VI”, rollno: 12 }
 */

function removeProp(prop) {
    var student = {
            name: "David Rayy",
            class: "VI",
            rollno: 12
        }
        // chỉ viết code ở dưới dòng này.
    delete student[prop];
    return student;
}
// console.log(removeProp("name"));

/**
 * Viết hàm countProperty để in ra độ dài của một đối tượng
 * @param{object}
 * @return{number}
 *
 * Example:
 * var student = {
 *      name: "Jerry",
 *      age: 14,
 *      role: "student"
 *  }
 *- lengthObj(student); // length: 3
}
*/

function countProperty(obj) {
    // viết code ở đây
    let result = 0;
    for (const key in obj) {
        result++;
    }
    return result;
}
// console.log(countProperty(student));

/**
 * Viết hàm xây dựng Shape để tạo các đối tượng hình học có các thuộc tính sau:
 *  {
 *    color: String,
 *    shape: String,
 *    fill: boolean
 *  }
 */

function Shape(color, shape, fill) {
    // Your code here
    this.color = color;
    this.shape = shape;
    this.fill = fill;
    // return Shape;
}

var shape1 = new Shape("red", "rectangle", true);
var shape2 = new Shape("orange", "triangle", false);
var shape3 = new Shape("tomato", "circle", true);
// console.log([shape1, shape2, shape3]);