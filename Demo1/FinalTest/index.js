// const moment = require("moment");

function isWeekend(time) {
    var theTime = new Date(time);
    day = theTime.getUTCDay();
    console.log(day);
    if (day === 6 || day === 0) return true;
    else return false;
}

// isWeekend("2019/10/21");

/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */

var fromDate = new Date("2019/10/17");
var toDate = new Date("2019/10/21");

function diff(fromDate, toDate) {
    // Write code here...
    return (toDate.getTime() - fromDate.getTime()) / (1000 * 24 * 60 * 60);
}
// diff(fromDate, toDate);

/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ
 * cách ngày được truyền vào n ngày
 */

var date = new Date("06/10/2019");

function subtractDays(date, n) {
    // Write code here...
    var time = date.getTime() - n * 1000 * 24 * 3600;
    var subtractDay = new Date(time);
    console.log(subtractDay);
}

// subtractDays(date, 10);

/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */
var member = [{
        id: 0,
        name: "member 0",
        listbook: [{
            bookId: 12332,
            timeBorrow: "",
            timeGiveBack: "",
            duration: 10;

        }]
    }, {
        id: 0,
        name: "member 0",
        listbook: [{
            bookId: 5234,
            timeBorrow: "",
            timeGiveBack: "",
            duration: 11;

        }, {
            bookId: 1232,
            timeBorrow: "",
            timeGiveBack: "",
            duration: 10;

        }]
    }, {
        id: 1,
        name: "member 1",
        listbook: [{
            bookId: 12332,
            timeBorrow: "",
            timeGiveBack: "",
            duration: 10;

        }]
    },
    {
        id: 3,
        name: "member 3",
        listbook: [{
            bookId: 12332,
            timeBorrow: "",
            timeGiveBack: "",
            duration: 10;

        }]
    }
];
var bookShelves = [
    { id: 0, locate: "", size: 200 },
    { id: 1, locate: "", size: 150 },
    { id: 1, locate: "", size: 100 },
    { id: 2, locate: "", size: 200 },
    { id: 3, locate: "", size: 100 },
    { id: 4, locate: "", size: 150 }
];
var bookCategories = [
    { id: 0, name: "sách thiếu nhi" },
    { id: 1, name: "sách thiếu nhi" },
    { id: 2, name: "sách thiếu nhi" },
    { id: 3, name: "sách thiếu nhi" },
    { id: 4, name: "sách thiếu nhi" },
    { id: 4, name: "sách thiếu nhi" },
    { id: 5, name: "sách thiếu nhi" },
];
var bookList = [
    { id: 0, name: "", bookShelvesId: 3, categoryId: 2 },
    { id: 0, name: "", bookShelvesId: 3, categoryId: 2 },
    { id: 0, name: "", bookShelvesId: 3, categoryId: 2 },
    { id: 0, name: "", bookShelvesId: 3, categoryId: 2 },
    { id: 0, name: "", bookShelvesId: 3, categoryId: 2 },
    { id: 0, name: "", bookShelvesId: 3, categoryId: 2 },
    { id: 0, name: "", bookShelvesId: 3, categoryId: 2 },
    { id: 0, name: "", bookShelvesId: 3, categoryId: 2 },
    { id: 0, name: "", bookShelvesId: 3, categoryId: 2 },
    { id: 0, name: "", bookShelvesId: 3, categoryId: 2 },
    { id: 0, name: "", bookShelvesId: 3, categoryId: 2 },
    { id: 0, name: "", bookShelvesId: 3, categoryId: 2 },
    { id: 0, name: "", bookShelvesId: 3, categoryId: 2 },
    { id: 0, name: "", bookShelvesId: 3, categoryId: 2 },
    { id: 0, name: "", bookShelvesId: 3, categoryId: 2 },
    { id: 0, name: "", bookShelvesId: 3, categoryId: 2 },
    { id: 0, name: "", bookShelvesId: 3, categoryId: 2 },

    { id: 0, name: "", bookShelvesId: 3, categoryId: 2 },

]