function getItems() {
	let items = [];
	db.collection('cart-web').onSnapshot((snapshot) => {
		snapshot.docs.forEach((doc) =>
			items.push({
				id:doc.id,
				...doc.data()
			})
		);
		generateItems(items);
	});
}

function generateItems(items) {
	let itemsHMTL = '';
	let totalprice = 0;
	 let totalItems = 0;

	 
	 
	items.forEach((item) => {
		totalprice += Number(item.price) ;
		totalItems = totalItems + 1;
		
	 

		itemsHMTL += `
               <div class="cart-box">
                   <img src = ${item.image} class="cart-img">
                    <div class="Item-detail">
                         <div class="cart-product-title">${item.name}</div>
                         <div class="cart-price">$ ${item.price}</div>
                    </div>
					<button type="button" class=" cart-remove" onclick = removeItemFromCart("${item.id}") > REMOVE </button>
               </div>   
        `;
	});
	
	document.querySelector('.total-price').innerHTML = totalprice;
	document.querySelector('.cart-content').innerHTML = itemsHMTL;
	
	
}

getItems();



function removeItemFromCart(id){
db.collection('cart-web').doc(`${id}`).delete().then(() => {
    
	getItems();
}).catch((error) => {
    console.error("Error removing document: ", error);
});

}
	

 



 
