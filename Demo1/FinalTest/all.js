// Viết hàm đảo ngược chuỗi
// Example
// reverse('abc') // 'cba'
function reverses(str) {
    var temp = [];
    var result = "";
    for (let index = 0; index < str.length; index++) {
        temp.push(str[index]);
    }
    temp.reverse();
    for (let index = 0; index < temp.length; index++) {
        result += temp[index];
    }
    return result;
}
// var moon = reverses("asidu");
// console.log(moon);

/** Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
 * - Example
 * - capitalize("abc") // "Abc"
 */
function isSpecialCharacters(character) {
    if (
        character === " " ||
        character === "." ||
        character === "!" ||
        character === ":" ||
        character === "?" ||
        character === ";" ||
        character === "*" ||
        character === "*" ||
        character === "-" ||
        character === "/" ||
        character === "+" ||
        character === "&" ||
        character === "@" ||
        character === "$"
    ) {
        return true;
    } else return false;
}

function toUpper(letter) {
    return letter.toUpperCase();
}

function capitalize(str) {
    var strRaw = [];
    var result = "";
    for (let index = 0; index < str.length; index++) {
        strRaw.push(str[index]);
    }
    for (let index = 0; index < strRaw.length; index++) {
        if (isSpecialCharacters(strRaw[index])) {
            result += strRaw[index];
            continue;
        } else if (!isSpecialCharacters(strRaw[index - 1]) && index != 0) {
            result += strRaw[index];
            continue;
        } else {
            strRaw[index] = toUpper(strRaw[index]);
            result += strRaw[index];
        }
    }
    return result;
}
// var string = "aldshaj hsdashdl. ahsdhash.adsliua.asda";

// result = capitalize(string);
// console.log(result);