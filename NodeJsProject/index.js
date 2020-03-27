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
            // case "3":
            //     showListContact();
            //     editContact();
            //     saveAll();
            //     break;
            // case "4":
            //     showListContact();
            //     deleteContact();
            //     saveAll();
            //     break;
            // default:
            //     break;
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
 *  - nếu lệch một kí tự thì chuyển qua object khác
 *- cũng làm tương tự như với name;
 *
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
            // case "3":
            //     showListContact();
            //     editContact();
            //     saveAll();
            //     break;
            // case "4":
            //     showListContact();
            //     deleteContact();
            //     saveAll();
            //     break;
            // default:
            //     break;
    }
}
main();