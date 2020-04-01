var co = require("co");
var requests = require("requests");
var axios = require("axios");
/**
 * Sử dụng module `axios` để tải dữ liệu và hiển thị ra màn hình lần lượt từng đường link (xong cái này rồi mới tới cái kia):
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 */

// var axios = require("axios");
// var promise = axios
//     .get("https://jsonplaceholder.typicode.com/todos/1")
//     .then(function(respond) {
//         console.log(respond.data);
//         console.log("Get link 1 done!");
//         axios
//             .get("https://jsonplaceholder.typicode.com/todos/2")
//             .then(function(respond) {
//                 console.log(respond.data);
//                 console.log("Get link 2 done!");
//             });
//     })
//     .catch(function(error) {
//         console.log("Error#1: ", error);
//     });
// ("use strict");

/**
 * Viết function `load` nhận vào 1 tham số là 1 đường link dạng string, trả về 1 promise sao cho khi gọi:
 * load('some url').then(function(body) {
 *   console.log('Done', body);
 * });
 * thì sẽ hiển thị ra màn hình 'Done' kèm theo nội dung đường link đã truyền vào.
 * Sau 30' không làm được thì có thể lên Slack hỏi
 */
function load(url) {
    return new Promise(function(resolve, reject) {
        requests(url, function(error, response, body) {
            if (error !== null) {
                reject(err);
                console.log("loading....");
            } else {
                resolve(response);
            }
        });
    });
}
// load("https://jsonplaceholder.typicode.com/todos/1")
//     .then(function(response) {
//         console.log("done!", response);
//     })
//     .catch({
//         function(error) {
//             console.log("error:", error);
//         }
//     });

/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */
// Promise.all([
//         axios.get("https://jsonplaceholder.typicode.com/todos/1"),
//         axios.get("https: //jsonplaceholder.typicode.com/todos/2"),
//         axios.get("https: //jsonplaceholder.typicode.com/todos/3")
//     ])
//     .then(function(value) {
//         console.log(value);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
var urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
    "https://jsonplaceholder.typicode.com/todos/4",
    "https://jsonplaceholder.typicode.com/todos/5"
];

/**
 * Cách 1: Sử dụng vòng lặp for
 */
var loadUrls = co.wrap(function*(links) {
    var value = [];
    for (let link of links) {
        value[links.indexOf(link)] = yield axios.get(link);
    }
    return value;
});

// loadUrls(urls)
//     .then(function(value) {
//         console.log(value);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

/**
 * Cách 2: Sử dụng array.map
 * Gợi ý: Có thể yield 1 array các Promise
 */
var getDataUrls = co.wrap(function*(links) {
    var value = yield links.map(function(link) {
        return axios.get(link);
    });
    return value;
});
// getDataUrls(urls)
//     .then(function(value) {
//         console.log(value);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

var fs = require("fs");
// var axios = require("axios");

// fs.readFile("./data.json", { encoding: "utf8" }, function(err, data) {
//     console.log("Data loaded from disk", data);

//     axios.get("https://jsonplaceholder.typicode.com/todos/1").then(function(res) {
//         console.log("Data downloaded from url", res.data);
//     });
// });

/**
 * - Sử dụng async await kết hợp với Promise để viết lại đoạn code trên.
 * - Gợi ý: Viết lại 1 async function làm 2 việc trên và chạy thử
 */
async function loadData(path, url) {
    var data1 = await fs.readFile(path, { encoding: "utf-8" }, function(
        err,
        data
    ) {
        console.log("Data loaded from disk", data);
    });
    var data2 = await axios.get(url).then(function(res) {
        console.log("Data downloaded from url", res.data);
    });
    return [data1, data2];
}
loadData("./data.json", "https://jsonplaceholder.typicode.com/todos/1");