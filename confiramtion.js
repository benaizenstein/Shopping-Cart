let params = new URLSearchParams(document.location.search.substring(1));
let id = params.get("id"); 
let totalPrice = params.get("totalPrice"); 
let printOrder = document.querySelector('.tnx-container_order')
printOrder.innerHTML = `Order Number: ${id} , Price: ${totalPrice}$`