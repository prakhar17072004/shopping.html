function addItem(){
    let text =document.getElementById("card1");
    db.collection("shopping-web").add({
        product: text.value,
        image: src.value,
        price:number.value,
        description:text.value
    })
    text.value="";
}
addItem();

