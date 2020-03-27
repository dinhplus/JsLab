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
    return contact;
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

function searchContact() {
    for (const iterator of contacts) {
        let value = readlineSync.question("contact Name or phone Number: ");
    }
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