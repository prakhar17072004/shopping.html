function addItem(){
    db.collection("shopping").add({
        text: "product",
        status: "active"
    })
}
addItem()
