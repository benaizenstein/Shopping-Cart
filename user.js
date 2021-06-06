let params = new URLSearchParams(document.location.search.substring(1));
let username = params.get("username");
let displayArea = document.querySelector(".container");
const logout = () => {
    window.location.href = `index.html?stat=logout`;
};
const getFromLoacl = () => {
    let payArr = JSON.parse(localStorage.getItem("payArr"));
    console.log(payArr);
    if (payArr != null) {
        for (let i = 0; i < payArr.length; i++) {
            if (payArr[i].userPayed == username) {
                displayArea.innerHTML += `
                <div class="card">
                    <div class="contentBx">
                    <h2>order id: ${payArr[i].orderId}</h2>
                    <h2>Total Price: ${payArr[i].totalPrice}$</h2>
                    </div>
                </div> `;
            }
        }
    }
};
getFromLoacl();
