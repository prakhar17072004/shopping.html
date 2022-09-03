function getItems(){
    db.collection("shopping-web").onSnapshot((snapshot)=>{
        let items=[];
        console.log(snapshot.docs[0].data())
        snapshot.docs.forEach((doc)=>(
            items.push({
                id:doc.id,
                ...doc.data()
            })
        ))
        generateItems(items);
    })
}
function generateItems(items){
    let itemsHMTL="";
    items.forEach((item)=>{
        itemsHMTL+= ` 
        <div class="card1">
                <div data-id="${item.id}"class="Item-img">
                    <img src="images/download-1.jpeg">
                </div>
                <div class="Iteam-text">
                ${item.text}
                </div>
                <div class="add-cart">
                    <button>ADD CART</button>
                </div>
                       
        
                       
        `
        
    })
document.querySelector(".card1").innerHTML=itemsHMTL;
    createEventListeners();
}

   


   
getItems();