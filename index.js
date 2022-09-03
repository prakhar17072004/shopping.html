function getItems(){
    db.collection("shopping-web").onSnapshot((snapshot)=>{
        let items=[];
        snapshot.docs.forEach((doc)=>(
            items.push({
                id:doc.id,
                ...doc.data()
            })
        ))
        console.log(items)
        generateItems(items);
    })
}

function generateItems(items){
    let itemsHMTL="";
    items.forEach((item)=>{
        itemsHMTL+= `<div class="card1">
        <div class="Item-img">
            <img src=${item.image}>
        </div>
        <div class="Item-text">
            <h1>${item.product}</h1>
        <p class="price">&#8377; ${item.price}</p>
        <p>${item.description}</p>
        </div>
        <div class="add-cart">
            <button>ADD CART</button>
        </div>        
    </div>`    
    })
document.querySelector(".products").innerHTML=itemsHMTL;   
}
  
getItems()