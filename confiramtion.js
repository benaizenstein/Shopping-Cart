let params = new URLSearchParams(document.location.search.substring(1));
let id = params.get("id");
let totalPrice = params.get("totalPrice");
let username = params.get("un");
let printOrder = document.querySelector(".tnx-container_order");
let printhead = document.querySelector(".tnx-container_header");
printOrder.innerHTML = `Order Number: ${id} , Price: ${totalPrice}$`;
printhead.innerHTML = `THANK YOU ${username}!`;
