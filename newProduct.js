function addItem(){
    let name =document.getElementById("name").value;
    let image =document.getElementById("image").value;
    let price =document.getElementById("price").value;
    let description =document.getElementById("description").value;
    db.collection("shopping-web").add({
        name: name,
        image: image,
        price:price,
        description:description
    })
    document.getElementById("name").value = ''
    document.getElementById("image").value = ''
    document.getElementById("price").value = ''
    document.getElementById("description").value =''
}
