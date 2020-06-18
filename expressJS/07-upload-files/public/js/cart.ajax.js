var btnList = document.querySelectorAll(".addToCart");
for (let index = 0; index < btnList.length; index++) {
    var element = btnList[index];
    btnList[index].addEventListener("click", function() {
        return axios.post('/cart/add', {
                sessionId: document.cookie.sessionId,
                productId: btnList[index].id
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    })

}








// function addToCart() {
//     console.log(document.cookie.sessionId);
//     return axios.post('/cart/add', {
//             sessionId: document.cookie.sessionId,
//             productId: addToCartBtn.name
//         })
//         .then(function(response) {
//             console.log(response);
//         })
//         .catch(function(error) {
//             console.log(error);
//         });
// }