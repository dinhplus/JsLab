 /** 
                                                     Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự tăng dần (descending order)
                                                    */
 function sortNumber(arr) {
     // Write code here...
     return arr.sort((a, b) => (a - b));
 }

 /**Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)
  */
 function sortNumber(arr) {
     // Write code here...
     return arr.sort((a, b) => (b - a));
 }

 /** Sort an array from shortest string to longest
  * Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length
  */
 function lengthSort(arr) {
     // Write code here...
     return arr.sort((a, b) => (a.length - b.length));
 }

 /** Sort an array alphabetically
  */
 function alphabetical(arr) {
     // Write code here...

     return arr.sort((a, b) => {
         if (a[0] <= b[0]) return -1
         else return 1;
     });
 }
 //  res = alphabetical(["dog", "wolf", "by", "family", "eaten"]);
 //  console.log(res);


 var arr = [{
             name: "Quiet Samurai",
             age: 22
         },
         {
             name: "Arrogant Ambassador",
             age: 100
         },
         {
             name: "Misunderstood Observer",
             age: 2
         },
         {
             name: "Unlucky Swami",
             age: 77
         }
     ]
     /** Sort the objects in the array by age
      */
 function byAge(array) {
     return array.sort((a, b) => (a['age'] - b['age']));

 }
 //  console.log(byAge(arr));

 /**
  * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
  * + Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần. 
  * + Mục đích để hiển thị lên bảng Leaderboard
  * * Gợi ý: sử dụng sort và slice
  */

 var students = [
     { name: 'A', score: 100 },
     { name: 'B', score: 10 },
     { name: 'C', score: 101 },
     { name: 'D', score: 50 },
     { name: 'E', score: 75 }
 ];

 function getTopStudents(students_arr) {
     // Write code here...
     var sorted = students_arr.sort((a, b) => (b['score'] - a['score'])).slice(0, 3);
     return sorted.reduce((accumulator, currentValue) => {
         accumulator.push(currentValue['name']);
         return accumulator;
     }, [])
 }
 //  console.log(getTopStudents(students));