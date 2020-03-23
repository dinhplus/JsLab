/**
*  Viết hàm xây dựng các đối tượng student có các thuộc tính sau:
*  - name: String,
* - level: String,
*  - school: String

*  Trong đó, thuộc tính school là thuộc tính dùng chung, có giá trị là "CodersX".
*/

function Studentx(name, level) {
    this.name = name;
    this.level = level;
    this.school = "CodersX";
}

/**
*-  Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
*  -  diemToan: Number,
*  - diemLy: Number,
*  -  diemHoa: Number
*  - average: [function];
*     1. average là hàm tính điểm trung bình 3 môn. 
*     2. average là thuộc tính dùng chung.

*-  Output: 
*   - student1.average() = 7
*   - student2.average() = 8
*/

function Student(diemToan, diemLy, diemHoa) {
    // Viết code ở đây
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;


}

Student.prototype.average = function() {
    return Math.round((this.diemToan + this.diemLy + this.diemHoa) / 3);
}

// var student1 = new Student(6, 7, 7);
// var student2 = new Student(8, 9, 6);

/**
 * Chạy đoạn code phía dưới và giải thích kết quả
 * Link run code: https://repl.it/@maithedung/DroopyPaltryKeygenerator
 */

function answer() {
    return `
    // Ghi câu trả lời ở đây
    Prototype giữa các object được tạo ra từ cùng một kiểu đối tượng Object có cũng nơi lưu trữ và được chia sẻ với nhau.
    Vì thế mà kết khi gọi mrThinh.sing hay mrDung.sinh thì nó đều trỏ đến một vị tí là Person.prototype thay vì là tạo ra một method mới giống như name, type, age.
    
    `
}

function Person(name, age) {
    this.type = "person";
    this.name = name;
    this.age = age;
}

Person.prototype.sing = function() {
    console.log(`Là lá la...`);
};

const mrThinh = new Person("Pham Thinh", 33);
const mrDung = new Person("The Dung", 19);

mrThinh.sing === mrDung.sing