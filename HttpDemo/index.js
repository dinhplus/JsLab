/**
 * Có 1 chàng hiệp sĩ can đảm vì muốn giải cứu một cô công chúa xinh đẹp tuyệt trần, chàng phải chiến đấu với một con rồng lửa có 1000 cái đầu.Với một chiêu chàng có thể chặt 1, 17, 21 hoặc 33 cái đầu của con rồng đó nhưng sau khi chặt thì từ cái đầu bị chặt sẽ mọc ra 10, 14, 0 hay 40 cái đầu khác nữa(tùy theo số đầu mà chàng chặt: 1– 10; 17– 14; 21– 0; 33– 40).Nếu như chàng chặt đứt cái đầu cuối cùng của nó thì mới hạ được nó và lúc đó chàng có thể cứu được cô công chúa diễm lệ.
 */
// Hỏi bạn cần chém ít nhất bao nhiêu lần để cứu công chúa?
// A) 50
// B) 51
// C) 52
// D) 53
// E) 54
//=>999-983-979-967
//9
//-3
//-21
//7
// a*9-b*3-c*21+d*7== -999|-983|-979|-967;
// min(a+b+c+d)=50|51|52|53|54;

// function sumHit() {

//     let result = [];
//     for (let a = 0; a < 55; a++) {
//         for (let b = 0; b < 55; b++) {
//             for (let c = 0; c < 55; c++) {
//                 for (let d = 0; d < 55; d++) {
//                     if (a * 9 - b * 3 - c * 21 + d * 7 == -999 ||
//                         a * 9 - b * 3 - c * 21 + d * 7 == -983 ||
//                         a * 9 - b * 3 - c * 21 + d * 7 == -979 ||
//                         a * 9 - b * 3 - c * 21 + d * 7 == -967) {
//                         // let sum = a + b + c + d + 1;
//                         var temp = {
//                             a: a,
//                             b: b,
//                             c: c,
//                             d: d,
//                             sum: function() {
//                                 return this.a + this.b + this.c + this.d + 1;
//                             }
//                         };
//                         console.log(temp.sum());
//                         result.push(temp);
//                     }
//                 }
//             }
//         }
//     }
//     result = result.sort((x, y) => x.sum() - y.sum());
//     return result;
// }
// console.log(sumHit());

var adder = {
    base: 1,

    add: function(a) {
        var f = v => v + this.base;
        return f(a);
    },

    addThruCall: function(a) {
        var f = v => v + this.base;
        var b = {
            base: 2
        };

        return f.call(b, a);
    }
};
// constructor() {}
console.log(adder.add(1)); // Sẽ trả ra 2
console.log(adder.addThruCall(1)); // Vẫn sẽ trả ra 2