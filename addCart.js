function addCart(id) {
	db.collection('shopping-web')
		.doc(id)
		.get()
		.then((snapshot) => db.collection('cart-web').add(snapshot.data()));
}
