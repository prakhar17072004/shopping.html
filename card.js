function getItems() {
	let items = [];
	db.collection('cart-web').onSnapshot((snapshot) => {
		snapshot.docs.forEach((doc) =>
			items.push({
				...doc.data()
			})
		);
		generateItems(items);
	});
}

function generateItems(items) {
	let itemsHMTL = '';
	items.forEach((item) => {
		itemsHMTL += `
       <div class="cart-box">
                <img src = ${item.image} class="cart-img">
                    <div class="Item-detail">
                         <div class="cart-product-title">${item.name}</div>
                         <div class="cart-price">$ ${item.price}</div>
                    </div>
            </div>   
        `;
	});
	document.querySelector('.cart-container').innerHTML = itemsHMTL;
}

getItems();
