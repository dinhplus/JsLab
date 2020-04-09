var readlineSync = require("readline-sync");
var fs = require("fs");
/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var contacts;

function loadData() {
    contacts = JSON.parse(fs.readFileSync("./data.json"));
    // console.log(contact);
    return contacts;
}

function saveAll() {
    let content = JSON.stringify(contacts);
    fs.writeFileSync("./data.json", content, { encoding: "utf-8" });
}

function showMenu() {
    console.log("1. Create new Contact");
    console.log("2. Search Contact");
    console.log("3. Edit contact");
    console.log("4. Delete contact");
    let option = readlineSync.question(">");
    switch (option) {
        case "1":
            showCreateContact();
            saveAll();
            main();
            break;
        case "2":
            searchContact();
            main();
            break;
        case "3":
            console.log("chọn số tương ứng với contact để chỉnh sửa");
            showListContact();
            var selectToEdit = readlineSync.question(">>");
            editContact(selectToEdit - 1);
            saveAll();
            if (saveAll()) console.log("saved Done!");
            main();
            break;
        case "4":
            console.log("chọn số tương ứng với contact để chỉnh Xóa");
            showListContact();
            var selectToDelete = readlineSync.question(">>");
            deleteContact(selectToDelete - 1);
            saveAll();
            console.log("Đã xóa!");
            main();
            break;
        default:
            break;
    }
}

function showCreateContact() {
    let contactName = readlineSync.question("Name:");
    let contactPhoneNumber = readlineSync.question("Phone Number:");
    let newContact = { name: contactName, phoneNumber: contactPhoneNumber };
    contacts.push(newContact);
}
/**
 * Nhập vào $value => Phân giải chuỗi value thành mảng
 *- Quét qua từng phần tử Contacts.name,
 *  - phân giải chuỗi thành dạng mảng
 *  - so sánh từng phần tử mảng value[] với mảng name[],
 *  - Nếu trùng khớp toàn bộ giá trị của value với name thì getResult(),
 *  - nếu lệch một kí tự thì chuyển qua value[key] khác
 *- cũng làm tương tự như với phoneNumber;
 *- vì để tiết kiệm time thì nối luôn cả name và number lại để so sánh cho dễ
 */
function searchContact() {
    var result = [];
    let checkList = [];

    let value = readlineSync.question("contact Name or phone Number: ");

    for (const key in contacts) {
        var compareLetters = contacts[key].name + contacts[key].phoneNumber;
        checkList.push([compareLetters, key]);
    }

    for (const comp of checkList) {
        var count = 0;
        var temp;
        for (let index = 0; index < value.length; ++index) {
            for (let ind = 0; ind < comp[0].length; ind++) {
                if (value[index] == comp[0][ind]) {
                    count++;
                    break;
                }
            }
            if (count === value.length) {
                temp = checkList.indexOf(comp);
                result = result.concat(getResult(temp));
            }
        }
    }

    console.log(result);
    return result;
}

function getResult(index) {
    var result = [];
    result.push(contacts[index]);
    return result;
}

function showListContact() {
    for (let index = 0; index < contacts.length; index++) {
        console.log(
            index +
            1 +
            ". " +
            (contacts[index].name + ":" + contacts[index].phoneNumber)
        );
    }
}

function editContact(key) {
    console.log("The old name is:", contacts[key]["name"]);
    let newName = readlineSync.question("New name :");
    console.log("The old phone Number is:", contacts[key]["phoneNumber"]);
    let newPhoneNumber = readlineSync.question("New Phone Number :");
    contacts[key] = { name: newName, phoneNumber: newPhoneNumber };
    return contacts;
}

function deleteContact(key) {
    console.log(
        "Do you really want to delete this contact?" +
        "\n" +
        contacts[key]["name"] +
        ":" +
        contacts[key]["phoneNumber"]
    );
    console.log("enter yes to delete, any letter to Back menu");
    let validToDelete = readlineSync.question("(yes/no):");
    if (validToDelete === "yes") {
        contacts.splice(key, 1);
    } else main();
    return contacts;
}

function main() {
    loadData();
    showMenu();
    let option = readlineSync.question(">");
    switch (option) {
        case "1":
            showCreateContact();
            saveAll();
            main();
            break;
        case "2":
            searchContact();
            main();
            break;
        case "3":
            console.log("chọn số tương ứng với contact để chỉnh sửa");
            showListContact();
            var selectToEdit = readlineSync.question(">>");
            editContact(selectToEdit - 1);
            saveAll();
            console.log('saved Done!');
            main();
            break;
        case "4":
            console.log("chọn số tương ứng với contact để chỉnh Xóa");
            showListContact();
            var selectToDelete = readlineSync.question(">>");
            deleteContact(selectToDelete - 1);
            saveAll();
            console.log("Đã xóa!");
            main();
            break;
        default:
            break;
    }
}
main();