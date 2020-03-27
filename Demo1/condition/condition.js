/**
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
 */

function max(arr) {
    // your code here
    let maximum = arr[0];
    for (const iterator of arr) {
        if (iterator > maximum) maximum = iterator;
    }
    return maximum;
}
// console.log(max([1, 3, 5, 4, 35, 3, 42, 42, 6, 435, 24, 24, 24, 234, 234, 235, 32, 543, 534, 543, 52, 423, 53, 4, 56, 656, 34, 24, 23, 423, 4]));

/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
    return arr.map(letter => {
        switch (letter) {
            case "A":
            case "a":
                letter = 1;
                break;
            case "B":
            case "b":
                letter = 2;
                break;
            default:
                letter = 0;
                break;
        }
        return letter;
    });
}