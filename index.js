function getItems() {
	db.collection('shopping-web').onSnapshot((snapshot) => {
		let items = [];
		snapshot.docs.forEach((doc) =>
			items.push({
				id: doc.id,
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
        <div class="card1">
                <div class="Item-img">
                  <img src = ${item.image}>
                </div>
                <div class="Item-text">
                    <h1 class= "name"> ${item.name} </h1>
                <p class="price">&#8377; ${item.price}</p>
                <p class="description">${item.description}</p>
                </div>
                <div class="add-cart">
                <button type="button" onclick = addCart("${item.id}")>ADD CART</button>
                </div>
            </div>     
        `;
	});
	document.querySelector('.products').innerHTML = itemsHMTL;
}

getItems();
