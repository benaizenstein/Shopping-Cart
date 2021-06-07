let params = new URLSearchParams(document.location.search.substring(1));
let username = params.get("username");
let displayArea = document.querySelector(".userOrders-container");
const logout = () => {
    window.location.href = `index.html?stat=logout`;
};
const backToShop = () => {
    window.location.href = `index.html`;
};
const getFromLoacl = () => {
    let payArr = JSON.parse(localStorage.getItem("payArr"));
    
    console.log(payArr);
    if (payArr != null) {
        for (let i = 0; i < payArr.length; i++) {
            let productsData = payArr[i].productsData
            if (payArr[i].userPayed == username) {
                let string =`<div class="card">`
                console.log(string)
                for (let j = 0; j < productsData.length; j++) {
                    string += `
                    <div class="contentBx2"><p> ${productsData[j].prodid} ${productsData[j].name} ${productsData[j].price}$ ${productsData[j].size} ${productsData[j].qty}</p></div>`
                    console.log(string)
                }
                    string += `<div class="contentBx3">
                <h2>order id: ${payArr[i].orderId}</h2>
                <h2>Total Price: ${payArr[i].totalPrice}$</h2>
            </div>
        </div> `;
        displayArea.innerHTML +=string
        }
        
    }
    }
};
getFromLoacl();
