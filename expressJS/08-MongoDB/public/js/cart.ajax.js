var addBtnList = document.querySelectorAll(".add-btn");
var inputQuantity = document.querySelectorAll(".input-quantity");
var decreaseBtnList = document.querySelectorAll(".decrease-btn");
var increaseBtnList = document.querySelectorAll(".increase-btn");
var itemCostList = document.querySelectorAll(".item-cost");
var bill = 0;
var count = [];
var price = [];
for (let index = 0; index < addBtnList.length; index++) {

    addBtnList[index].addEventListener("click", function() {
        // inputQuantity[index].value = inputQuantity[index].value > 0 ? parseInt(inputQuantity[index].value) + 1 : 0;
        return axios.post('/cart/add', {
                sessionId: document.cookie.sessionId,
                productId: addBtnList[index].id
            })
            // .then(function(response) {
            //     console.log(response.status, response.config.data);
            // })
            // .catch(function(error) {
            //     console.log(error);
            // });
    })
}

for (let index = 0; index < inputQuantity.length; index++) {
    count[index] = parseInt(inputQuantity[index].value);
    price[index] = parseInt(itemCostList[index].innerText) / count[index];
    inputQuantity[index].addEventListener("change", function() {
        let newQuantity = inputQuantity[index].value < 0 ? 0 : inputQuantity[index].value;
        count[index] = parseInt(newQuantity);
        itemCostList[index].innerText = count[index] * price[index];
        return axios.post('/cart/change', {
                sessionId: document.cookie.sessionId,
                productId: inputQuantity[index].id,
                newQuantity: newQuantity
            })
            // .then(function(response) {
            //     console.log(response.status, response.config.data);
            // })
            // .catch(function(error) {
            //     console.log(error);
            // });
    })

}

for (let index = 0; index < decreaseBtnList.length; index++) {
    decreaseBtnList[index].addEventListener("click", function() {
        inputQuantity[index].value = inputQuantity[index].value > 0 ? parseInt(inputQuantity[index].value) - 1 : 0;
        count[index] = parseInt(inputQuantity[index].value);
        itemCostList[index].innerHTML = count[index] * price[index];
        return axios.post('/cart/decrease', {
                sessionId: document.cookie.sessionId,
                productId: decreaseBtnList[index].id
            })
            // .then(function(response) {
            //     console.log(response.status, response.config.data);
            // })
            // .catch(function(error) {
            //     console.log(error);
            // });
    })
}
for (let index = 0; index < increaseBtnList.length; index++) {

    increaseBtnList[index].addEventListener("click", function() {
        inputQuantity[index].value = inputQuantity[index].value > 0 ? parseInt(inputQuantity[index].value) + 1 : 0;
        count[index] = parseInt(inputQuantity[index].value);
        itemCostList[index].innerHTML = count[index] * price[index];
        return axios.post('/cart/add', {
                sessionId: document.cookie.sessionId,
                productId: increaseBtnList[index].id
            })
            // .then(function(response) {
            //     console.log(response.status, response.config.data);
            // })
            // .catch(function(error) {
            //     console.log(error);
            // });
    })
}
// for (let index = 0; index < itemCostList.length; index++) {
//     const element = itemCostList[index];
//     let count = inputQuantity[index].value;
//     let price = itemCostList[index] / count;
//     itemCostList[index].value =

// }