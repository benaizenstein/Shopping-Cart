//-----------------------------------------stratSetUp-------------------------------------------------------//

let productsArray = [
    {
        name: "Shoes",
        color: "dif",
        size: "dif",
        qty: 0,
        img: "https://assets.codepen.io/4164355/shoes.png",
        fav: false,
        cart: false,
        price: 100,
        type: "men",
    },
    {
        name: "Top",
        color: "dif",
        size: "dif",
        qty: 0,
        img: "https://www.pngkey.com/png/full/52-523758_vector-free-tshirt-t-shirt.png",
        fav: false,
        cart: false,
        price: 10,
        type: "men",
    },
    {
        name: "Ball",
        color: "dif",
        size: "dif",
        qty: 0,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Soccer_ball.svg/1200px-Soccer_ball.svg.png",
        fav: false,
        cart: false,
        price: 30,
        type: "men",
    },
    {
        name: "Short",
        color: "dif",
        size: "dif",
        qty: 0,
        img: "https://d3m9l0v76dty0.cloudfront.net/system/photos/5438848/large/26c9640279f2726d7df35c785bbb37d1.jpg",
        fav: false,
        cart: false,
        price: 15,
        type: "men",
    },
    {
        name: "Watch",
        color: "dif",
        size: "dif",
        qty: 0,
        img: "https://cdn.azrieli.com/Images/606b4ae5-eacc-4821-a666-5c887ba8e97d/Normal/ee470713.png",
        fav: false,
        cart: false,
        price: 350,
        type: "men",
    },
    {
        name: "Bag",
        color: "dif",
        size: "dif",
        qty: 0,
        img: "https://www.tikco.co.il/wp-content/uploads/2018/03/2210-20_a.png",
        fav: false,
        cart: false,
        price: 700,
        type: "men",
    },
    {
        name: "G-Top",
        color: "dif",
        size: "dif",
        qty: 0,
        img: "https://cdn.shopify.com/s/files/1/0360/6469/0221/products/crylike4_grande.png?v=1604599876",
        fav: false,
        cart: false,
        price: 100,
        type: "women",
    },
    {
        name: "Gloves",
        color: "dif",
        size: "dif",
        qty: 0,
        img: "https://pierce-images.imgix.net/images/6/5/d/6/65d6289862d1aaad15f8b037059798e69869f8dd_2_PIA_18256__wrz_04_2018_01.png",
        fav: false,
        cart: false,
        price: 10,
        type: "women",
    },
    {
        name: "Skipping Rope",
        color: "dif",
        size: "dif",
        qty: 0,
        img: "https://admin.niviasports.com/uploadfile/product/1515YL-1.png",
        fav: false,
        cart: false,
        price: 30,
        type: "women",
    },
    {
        name: "Tights",
        color: "dif",
        size: "dif",
        qty: 0,
        img: "https://fitanu.com/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/t/m/tmp185054.jpg",
        fav: false,
        cart: false,
        price: 15,
        type: "women",
    },
    {
        name: "Hand Weights",
        color: "dif",
        size: "dif",
        qty: 0,
        img: "https://i.pinimg.com/originals/61/2c/a5/612ca5260241904c74556392d0a3b80f.png",
        fav: false,
        cart: false,
        price: 350,
        type: "women",
    },
    {
        name: "Water Bottle",
        color: "dif",
        size: "dif",
        qty: 0,
        img: "https://cdn.shopify.com/s/files/1/1892/2457/products/51014-Actives-Spout-40-NitroPurple-angle_large.png?v=1616126869",
        fav: false,
        cart: false,
        price: 700,
        type: "women",
    },
];
let params = new URLSearchParams(document.location.search.substring(1));
let userStatus = params.get("stat");
let userLogin = false;
let userOnline = " ";
let paymentsArray = [];
let usersArray = [];
let displayArea = document.querySelector(".container");
let displaySize = document.querySelector(".display");
let leftNavBar = document.querySelector(".left-navbar");
let payment = document.querySelector(".payment");
let paymentLines = document.querySelector(".payment_lines");
let popup = document.querySelector(".popup");
let loginWrap = document.querySelector(".login-wrap");
let curPage = "all";
let firstRunFav = true;
let firstRunCart = true;
let totalPriceForCheck = 0;
let toggleswitcher = 0;
const cleanDisplayArea = () => (displayArea.innerHTML = " ");
const setUpProdArry = (arr) => {
    for (let i = 0; i < 12; i++) {
        arr[i].id = arr[i].name + i;
        arr[i].cart = false
        arr[i].fav = false
    }
};


setUpProdArry(productsArray);

//-----------------------------------------Get From Local Storage-------------------------------------------------------//
const getFromLoacl = () => {
    let prudArr = localStorage.getItem("prudArr");
    let user = localStorage.getItem("user");
    let payArr = localStorage.getItem("payArr");
    let userArr = localStorage.getItem("userArr");

    if (prudArr != null) {
        productsArray = JSON.parse(prudArr);
        console.log(productsArray)
        for (let i = 0; i < productsArray.length; i++) {
            if (productsArray[i].fav == true) {
                firstRunFav = false;
            }
            if (productsArray[i].cart == true) {
                firstRunCart = false;
            }
        }
    }

    if (user != null) {
        userLogin = true;
        userOnline = JSON.parse(user);
    }
    if (payArr != null) {
        paymentsArray = JSON.parse(payArr);
    }
    if (userArr != null) {
        usersArray = JSON.parse(userArr);
    }
};
getFromLoacl();
//-----------------------------------------Search Btn-------------------------------------------------------//
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
    if (search.classList.contains("active") && input.value.length > 0) {
        display("search", input.value);
    } else {
        search.classList.toggle("active");
    }
    input.focus();
});
input.addEventListener("keyup", (e) => {
    display("search", e.target.value);
});

input.addEventListener("focusout", (e) => {
    if (input.value.length == 0) {
        if (search.classList.contains("active")) {
            search.classList.remove("active");
        }
    }
});
//-----------------------------------------ADV-------------------------------------------------------//
var textWrapper = document.querySelector(".ml12");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime
    .timeline({ loop: true })
    .add({
        targets: ".ml12 .letter",
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0.1, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 20 + 30 * i,
    })
    .add({
        targets: ".ml12 .letter",
        translateX: [0, -30],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 20 + 10 * i,
    });

//-----------------------------------Display---------------------------------//
const display = (userChoosepage, inputValue) => {
    curPage = userChoosepage;
    cleanDisplayArea();

    if (curPage == "all") {
        payment.style.visibility = "hidden";
        displaySize.style.width = "80vw";
        displaySize.style.right = "0";
        leftNavBar.style.height = "200%";

        displayAll();
    } else if (curPage == "men") {
        payment.style.visibility = "hidden";
        displaySize.style.width = "80vw";
        displaySize.style.right = "0";
        leftNavBar.style.height = "120vh";

        displayMen();
    } else if (curPage == "women") {
        payment.style.visibility = "hidden";
        displaySize.style.width = "80vw";
        displaySize.style.right = "0";
        leftNavBar.style.height = "120vh";

        displayWomen();
    } else if (curPage == "fav") {
        payment.style.visibility = "hidden";
        displaySize.style.width = "80vw";
        displaySize.style.right = "0";
        displayFav();
    } else if (curPage == "user") {
        payment.style.visibility = "hidden";
        displaySize.style.width = "80vw";
        displaySize.style.right = "0";
        displayUser();
    } else if (curPage == "cart") {
        displayCart();
    } else if (curPage == "search") {
        if (inputValue != undefined) displaySearch(inputValue);
    }
};

//-----------------------------------Color & Size Validation---------------------------------//

const toggleInput = (idx, label) => {
    let inputs = document.querySelectorAll(`input.Color${idx}`);
    let labels = document.querySelectorAll(`label.Color${idx}`);
    labels.forEach((label) => {
        label.style.color = "black";
    });
    let color = label.htmlFor;
    inputs.forEach((input) => {
        if (input.id == `${color + idx}`) {
            input.click();
            label.style.color = input.checked ? color.toLowerCase() : "black";
        } else {
            input.checked = false;
        }
    });
};
const toggleInputSize = (idx, label) => {
    let inputs = document.querySelectorAll(`input.Size${idx}`);
    let size = label.htmlFor;
    inputs.forEach((input) => {
        if (input.id == `${size + idx}`) {
            input.click();
        } else {
            input.checked = false;
        }
    });
};
//-----------------------------------Display helper functions---------------------------------//
const cardDisplayStr = (i) => {
    return `
  <div class="card">
      <div class="imgBx">
        <img src=${productsArray[i].img}>
      </div>
      <div class="contentBx">
        <h2>${productsArray[i].name}</h2>
        <div class="size">
          <h3>Size:</h3>
          <input type="checkbox" class="Size${i}" id="S${i}" name="Size1" value="S">
          <label for="S" class="Size${i}" onclick="toggleInputSize(${i},this)">S</label><br>
          <input type="checkbox" id="M${i}" class="Size${i}" name="Size2" value="M">
          <label for="M" class="Size${i}" onclick="toggleInputSize(${i},this)">M</label><br>
          <input type="checkbox" id="L${i}" class="Size${i}" name="Size3" value="L">
          <label for="L" class="Size${i}" onclick="toggleInputSize(${i},this)">L</label>
        </div>
        <div class="size color">
          <h3>Color:</h3>
          <input type="checkbox" class="Color${i}" id="Red${i}" name="Color1" value="Red">
          <label for="Red" class="Color${i}" onclick="toggleInput(${i},this)">Red</label><br>
          <input type="checkbox" class="Color${i}" id="Blue${i}" name="Color2" value="Blue">
          <label for="Blue" class="Color${i}" onclick="toggleInput(${i},this)">Blue</label><br>
          <input type="checkbox" class="Color${i}" id="Black${i}" name="Color3" value="Black">
          <label for="Black" class="Color${i}" onclick="toggleInput(${i},this)">Black</label>
        </div>
        <div class="size QTY">
          <input type="number" id="qty${i}" placeholder="QTY" min="1" max="5">
        </div>
        <div id="alertBox${i}" class="alertBox" ></div>
        <div class="icon-buttons">
          <a class="bi bi-heart icon fa-2x" id="fav${i}" onclick="addOrRemoveFromFav(productsArray[${i}],this)"></a>
          <a class="bi bi-cart icon fa-2x" id="cart${i}" onclick="addOrRemoveFromCart(${i},productsArray[${i}],this)"></a>
        </div>
        </div>
    </div>
  `;
};

const cardPriceDisplayStr = (i) => {
    return `
  <div class="card">
      <div class="imgBx">
        <img src=${productsArray[i].img}>
      </div>
      <div class="contentBx">
        <h2>${productsArray[i].name}</h2>
        <div class="price">
          <h3>Price:${productsArray[i].price}$</h3>
        </div>
        <div class="price">
          <h3>QTY:${productsArray[i].qty}</h3>
        </div>
        <div class="price">
          <h3>TOTAL:${productsArray[i].price * productsArray[i].qty}$</h3>
        </div>

        <div id="alertBox${i}" class="alertBox"></div>
        <div class="icon-buttons">
          <a class="bi bi-heart icon fa-2x" id="fav${i}" onclick="addOrRemoveFromFav(productsArray[${i}],this)"></a>
          <a class="bi bi-cart icon fa-2x" id="cart${i}" onclick="addOrRemoveFromCart(${i},productsArray[${i}],this)"></a>
        </div>
        </div>
    </div>
  `;
};

const handleClassChanges = (i) => {
    if (productsArray[i].fav) {
        document.getElementById(`fav${i}`).classList.remove("bi-heart");
        document.getElementById(`fav${i}`).classList.add("bi-heart-fill");
    } else if (!firstRunFav) {
        document.getElementById(`fav${i}`).classList.remove("bi-heart-fill");
        document.getElementById(`fav${i}`).classList.add("bi-heart");
    }

    if (productsArray[i].cart) {
        document.getElementById(`cart${i}`).classList.remove("bi-cart");
        document.getElementById(`cart${i}`).classList.add("bi-trash");
    } else if (!firstRunFav) {
        document.getElementById(`cart${i}`).classList.remove("bi-trash");
        document.getElementById(`cart${i}`).classList.add("bi-cart");
    }
};
//-----------------------------------Display functions---------------------------------//

//-----------------------------------Display ALL---------------------------------//

const displayAll = () => {
    for (let i = 0; i < productsArray.length; i++) {
        if (productsArray[i].cart) {
            displayArea.innerHTML += cardPriceDisplayStr(i);
        } else {
            displayArea.innerHTML += cardDisplayStr(i);
        }
        handleClassChanges(i);
    }
};
display('all') // onload
//-----------------------------------Display Men---------------------------------//

const displayMen = () => {
    
    for (let i = (productsArray.length -1); i > -1 ;i--) {
        console.log(i)
        console.log(productsArray)
        if (productsArray[i].type == "men") {
            if (productsArray[i].cart) {
                displayArea.innerHTML += cardPriceDisplayStr(i);
            } else {
                displayArea.innerHTML += cardDisplayStr(i);
            }
            handleClassChanges(i);
        }
    }
};

//-----------------------------------Display Women---------------------------------//

const displayWomen = () => {
    for (let i = 0; i < productsArray.length; i++) {
        if (productsArray[i].type == "women") {
            if (productsArray[i].cart) {
                displayArea.innerHTML += cardPriceDisplayStr(i);
            } else {
                displayArea.innerHTML += cardDisplayStr(i);
            }
            handleClassChanges(i);
        }
    }
};
//-----------------------------------Display User---------------------------------//

const togglePopup = () => {
    if (toggleswitcher == 0) {
        popup.style.opacity = 1;
        loginWrap.style.opacity = 1;
        popup.style.zIndex = "10";
        loginWrap.style.zIndex = "11";
        toggleswitcher = 1;
    } else {
        popup.style.opacity = 0;
        loginWrap.style.opacity = 1;
        popup.style.zIndex = "-1";
        loginWrap.style.zIndex = "-1";
        toggleswitcher = 0;
    }
};
const displayUser = () => {
    if (userStatus == "logout") {
        userLogin = false;
        userOnline = " ";
        userStatus = " ";
    }
    if (userLogin == true) {
        alert(`Hello ${userOnline}`);
        window.location.href = `userPage.html?username=${userOnline}`;
    } else {
        togglePopup();
       
    }
};
//-----------------------------------Display FAV---------------------------------//

const displayFav = () => {
    let checkIfEmpty = true;
    for (let i = 0; i < productsArray.length; i++) {
        if (productsArray[i].fav) {
            checkIfEmpty = false;
            if (productsArray[i].cart) {
                displayArea.innerHTML += cardPriceDisplayStr(i);
            } else {
                displayArea.innerHTML += cardDisplayStr(i);
            }
            handleClassChanges(i);
        }
    }
    if (checkIfEmpty) {
        displayArea.innerHTML += `<img src="https://cdn.dribbble.com/users/12570/screenshots/13987694/media/1635918fab6854e489723a301619b7b2.jpg?compress=1&resize=400x300" style="opacity:0.8; width: 30vw; height: 30vh;">`;
    }
};
//-----------------------------------Display CART---------------------------------//
const displayCart = () => {
    paymentLines.innerHTML = ` `;
    
    let checkIfEmpty = true;
    console.log(productsArray)
    for (let i = 0; i < productsArray.length; i++) {
        if (productsArray[i].cart) {
            checkIfEmpty = false;
            payment.style.visibility = "visible";
            displaySize.style.width = "50vw";
            displaySize.style.right = "30%";
            paymentLines.innerHTML += `
      <p>${productsArray[i].qty} ${productsArray[i].color} ${productsArray[i].name} ${productsArray[i].size} : ${productsArray[i].price}$</p>`;
            displayArea.innerHTML += cardPriceDisplayStr(i);
            totalPriceForCheck += productsArray[i].price * productsArray[i].qty;
            handleClassChanges(i);
        }
    }
    paymentLines.innerHTML += `<p>Total Price: ${totalPriceForCheck}$</p> 
  <button class="payment-btn" onclick="confirmOrder()">Confirm</button>`;
    if (checkIfEmpty) {
        displayArea.innerHTML += `<img src="https://www.99fashionbrands.com/wp-content/uploads/2020/12/empty_cart-1200x900.png" style="width: 30vw; height: 30vh;">`;
    }

    totalPriceForCheck = 0;
};

//----------------------------------- CART---------------------------------//
const addOrRemoveFromCart = (i, prod, changeClassHere) => {
    
    firstRunCart = false;
    prod.cart ? removeFromCart(prod, changeClassHere) : addToCart(i, prod, changeClassHere);
};

//-------------------------------ADD TO CART + VALIDATION-------------------------------//

const addToCart = (i, prod) => {
    let sizeS = document.getElementById(`S${i}`);
    let sizeM = document.getElementById(`M${i}`);
    let sizeL = document.getElementById(`L${i}`);
    let colorRed = document.getElementById(`Red${i}`);
    let colorBlue = document.getElementById(`Blue${i}`);
    let colorBlack = document.getElementById(`Black${i}`);
    let qty = document.getElementById(`qty${i}`);
    let alertBox = document.getElementById(`alertBox${i}`);
    alertBox.innerHTML = " ";
    const checkBoxSizeVal = () => {
        if (sizeS.checked && !sizeM.checked && !sizeL.checked) {
            return sizeS.value;
        } else if (sizeM.checked && !sizeS.checked && !sizeL.checked) {
            return sizeM.value;
        } else if (sizeL.checked && !sizeS.checked && !sizeM.checked) {
            return sizeL.value;
        } else if (!sizeL.checked && !sizeS.checked && !sizeM.checked) {
            alertBox.innerHTML = " ";
            alertBox.innerHTML += "Choose Size";
            return false;
        }
    };
    const checkBoxColorVal = () => {
        if (colorRed.checked && !colorBlue.checked && !colorBlack.checked) {
            return colorRed.value;
        } else if (colorBlue.checked && !colorRed.checked && !colorBlack.checked) {
            return colorBlue.value;
        } else if (colorBlack.checked && !colorRed.checked && !colorBlue.checked) {
            return colorBlack.value;
        } else if (!colorBlack.checked && !colorRed.checked && !colorBlue.checked) {
            alertBox.innerHTML = " ";
            alertBox.innerHTML += "Choose Color";
            return false;
        }
    };
    const qtyVal = () => {
        if (qty.value > 0 && qty.value < 6) {
            return qty.value;
        } else {
            alertBox.innerHTML = " ";
            alertBox.innerHTML += "Choose 1-5 products";
            return false;
        }
    };
    if (checkBoxSizeVal() != false && checkBoxColorVal() != false && qtyVal() != false) {
        alertBox.innerHTML = " ";
        for (let i = 0; i < productsArray.length; i++) {
            if (productsArray[i].id == prod.id) {
                productsArray[i].size = checkBoxSizeVal();
                productsArray[i].color = checkBoxColorVal();
                productsArray[i].qty = qtyVal();
                productsArray[i].cart = true;
                localStorage.setItem("prudArr", JSON.stringify(productsArray));
                return display(curPage);
            }
        }
    }
};

//-----------------------------------REMOVE FROM CART---------------------------------//

const removeFromCart = (prod) => {
    for (let i = 0; i < productsArray.length; i++) {
        if (productsArray[i].id == prod.id) {
            productsArray[i].size = "def";
            productsArray[i].color = "def";
            productsArray[i].qty = 0;
            productsArray[i].cart = false;
        }
    }

    display(curPage);
};

//-----------------------------------FAV---------------------------------//
const addOrRemoveFromFav = (prod) => {
    firstRunFav = false;

    prod.fav ? removeFromFav(prod) : addToFav(prod);
};

//-------------------------------ADD TO FAV-------------------------------//
const addToFav = (prod) => {
    for (let i = 0; i < productsArray.length; i++) {
        if (productsArray[i].id == prod.id) {
            productsArray[i].fav = true;
            localStorage.setItem("prudArr", JSON.stringify(productsArray));
        }
    }

    display(curPage);
};
//-------------------------------Remove From FAV-------------------------------//
const removeFromFav = (prod) => {
    for (let i = 0; i < productsArray.length; i++) {
        if (productsArray[i].id == prod.id) {
            productsArray[i].fav = false;
        }
    }

    display(curPage);
};

//-------------------------------Search-------------------------------//
const displaySearch = (value) => {
    if (value != "") {
        for (let i = 0; i < productsArray.length; i++) {
            if (productsArray[i].name.substring(0, value.length).toLowerCase() == value.toLowerCase()) {
                curPage = "cart";
                if (productsArray[i].cart) {
                    displayArea.innerHTML += cardPriceDisplayStr(i);
                } else {
                    displayArea.innerHTML += cardDisplayStr(i);
                }
                handleClassChanges(i);
            }
        }
    }
};

//-------------------------------Confirm Order-------------------------------//
const confirmOrder = () => {
    
    let rndNum = Math.trunc(Math.random() * 1000 + 1);

    if (paymentsArray.length > 0) {
        for (let i = 0; i < paymentsArray.length; i++) {
            while (rndNum == paymentsArray[i].orderId) {
                rndNum = Math.trunc(Math.random() * 1000 + 1);
            }
        }
    }

    let totalPrice = 0;
    let tempArr = [];

    for (let i = 0; i < productsArray.length; i++) {
        if (productsArray[i].cart) {
            let obj = {
                prodid: productsArray[i].id,
                name: productsArray[i].name,
                size: productsArray[i].size,
                qty: productsArray[i].qty,
                price: productsArray[i].price,
            };
            tempArr.push(obj);
            totalPrice += productsArray[i].price;
        }
    }
    let paymentArrayObj = {
        productsData: tempArr,
        totalPrice: totalPrice,
        orderId: rndNum,
    };
    if (userStatus == "logout") {
        userLogin = false;
        userOnline = " ";
        userStatus = " ";
    }
    if (userOnline == false) {
        alert(`please login first`);
        displayUser();
    } else {
        paymentArrayObj.userPayed = userOnline;
        paymentsArray.push(paymentArrayObj);
        setUpProdArry(productsArray);
        localStorage.setItem("payArr", JSON.stringify(paymentsArray));
        localStorage.setItem("prudArr", JSON.stringify(productsArray));
        window.location.href = `confiramtionPage.html?un=${paymentArrayObj.userPayed}&id=${paymentArrayObj.orderId}&totalPrice=${paymentArrayObj.totalPrice}`;
    }
};

//-------------------------------USER LOGIN AND REGISTER-------------------------------//

const userLoginFunction = () => {
    let usernameLogin = document.getElementById(`user`);
    let passwordLogin = document.getElementById(`password`);
    let usernameRegister = document.getElementById(`userRegister`);
    let PasswordRegister = document.getElementById(`passRegister`);
    let RepeatPasswordRegister = document.getElementById(`pass2Register`);
    let emailAddressRegister = document.getElementById(`emailRegister`);
    let signInBtn = document.getElementById(`signin`);
    let signUpBtn = document.getElementById(`signup`);
    let signupAlertBox = document.getElementById(`signupAlertBox`);
    let alreadyMember = document.getElementById(`alreadyMember`);

    signUpBtn.addEventListener("click", () => {
        //---------SignUp----------//
        signupAlertBox.innerHTML = "";
        let createUser = true;
        if (
            usernameRegister.value == "" ||
            PasswordRegister.value == "" ||
            RepeatPasswordRegister.value == "" ||
            emailAddressRegister.value == ""
        ) {
            signupAlertBox.innerHTML = "Please fill all required fields";
            createUser = false;
        }
        if (usersArray.length > 0) {
            for (let i = 0; i < usersArray.length; i++) {
                if (usernameRegister.value == usersArray[i].username) {
                    signupAlertBox.innerHTML = "Username already exists";
                    createUser = false;
                }
                if (emailAddressRegister.value == usersArray[i].email) {
                    signupAlertBox.innerHTML = "Email already exists";
                    createUser = false;
                }
            }
        }
        if (PasswordRegister.value != RepeatPasswordRegister.value) {
            signupAlertBox.innerHTML = "Passwords don't match";
            createUser = false;
        }

        if (createUser) {
            signupAlertBox.innerHTML = "";
            let NewUser = {
                username: usernameRegister.value,
                password: PasswordRegister.value,
                email: emailAddressRegister.value,
            };
            usersArray.push(NewUser);
            localStorage.setItem("userArr", JSON.stringify(usersArray));
            signupAlertBox.innerHTML = "Registration succeeded";
            alreadyMember.click();
        }
    });

    signInBtn.addEventListener("click", () => {
        //---------SignIn----------//
        let createUser = false;
        while (createUser == false) {
            if (usersArray.length == 0) {
                createUser = false;

                alert("Please SignUp First");
                return;
            }
            if (usernameLogin.value == "" || passwordLogin.value == "") {
                alert("Please fill all required fields");
                createUser = false;
                return;
            }
            let checkloops = false;
            for (let i = 0; i < usersArray.length; i++) {
                if (usernameLogin.value == usersArray[i].username) {
                    checkloops = true;
                }
            }
            if (checkloops == false) {
                alert("Username doesn’t exist");
                return;
            }
            checkloops = false;
            for (let i = 0; i < usersArray.length; i++) {
                if (passwordLogin.value == usersArray[i].password) {
                    checkloops = true;
                }
            }
            if (checkloops == false) {
                alert("Wrong Password, try again");
                return;
            }
            createUser = true;
            userLogin = true;
            userOnline = usernameLogin.value;
            localStorage.setItem("user", JSON.stringify(userOnline));
            signupAlertBox.innerHTML = "";
            togglePopup();
            display('all');
            alert(`Hello ${userOnline}`);
        }
    });
};
userLoginFunction();

const stopRegister = () => {
    addEventListener("click", () => {
        if (event.target.classList == "popup") {
            togglePopup();
        } else return;
    });
};
stopRegister();
