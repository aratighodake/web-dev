let elementsel=document.querySelector(".elements");
let cartitemsel=document.querySelector(".offcanvas-body");
let subtotalel=document.querySelector(".subtotal");
let itemsincartel=document.querySelector(".sub sup");
const products=[
    {
        id:1,
        name:"Fresh Apple (5kg)",
        specialprice:140,
        price:160,
        stock:10,
        qty:0
    },
    {
        id:2,
        name:"Sp. red fresh guava",
        specialprice:30,
        price:50,
        stock:9,
        qty:0
    },
    {
        id:3,
        name:"Fresh Mussel (500g)",
        specialprice:33,
        price:40,
        stock:12,
        qty:0
    },
    {
        id:4,
        name:"Fresh Organic Fruit (50g)",
        specialprice:33,
        price:40,
        stock:30,
        qty:0
    },
    {
        id:5,
        name:"Orange Juice (5lit)",
        specialprice:66,
        price:70,
        stock:15,
        qty:0
    },
    {
        id:6,
        name:"Shrimp Jumbo (5lb)",
        specialprice:61,
        price:80,
        stock:7,
        qty:0
    },
    {
        id:7,
        name:"Healthy Pappya 100% Organic",
        specialprice:20,
        price:40,
        stock:10,
        qty:0
    },
    {
        id:8,
        name:"Fresh SeaFood",
        specialprice:18,
        price:25,
        stock:13,
        qty:0
    },    {
        id:9,
        name:"BlackBerry 100% Organic",
        specialprice:18,
        price:25,
        stock:5,
        qty:0
    },
    {
        id:10,
        name:"Fresh Avcadeo",
        specialprice:15,
        price:20,
        stock:9,
        qty:0
    },
    {
        id:11,
        name:"Fresh dryed Almond (50g)",
        specialprice:31,
        price:40,
        stock:10,
        qty:0
    },
    {
        id:12,
        name:"Fresh Blueberry",
        specialprice:35,
        price:40,
        stock:19,
        qty:0
    },
    {
        id:13,
        name:"Vegetable Tomato",
        specialprice:55,
        price:60,
        stock:30,
        qty:0
    },
    {
        id:14,
        name:"Fresh Green Orange",
        specialprice:10,
        price:20,
        stock:13,
        qty:0
    },
    {
        id:15,
        name:"Organic Coconut",
        specialprice:55,
        price:60,
        stock:20,
        qty:0
    },
    {
        id:16,
        name:"Fresh & Healthy food",
        specialprice:14,
        price:20,
        stock:9,
        qty:0
    },
    {
        id:17,
        name:"Fruits Banana 100% Organic",
        specialprice:22,
        price:30,
        stock:10,
        qty:0
    },
    {
        id:18,
        name:"Fresh Carrot Natural free",
        specialprice:34,
        price:40,
        stock:12,
        qty:0
    },
    {
        id:19,
        name:"Fresh Litchi 100% Organic",
        specialprice:44,
        price:50,
        stock:10,
        qty:0
    },
    {
        id:20,
        name:"Fresh Organic Reacher",
        specialprice:140,
        price:160,
        stock:10,
        qty:0
    }
]
function displayproducts()
{
    products.map((items)=>{
        elementsel.innerHTML+=`
        <div class="col">
        <div class="position-relative img1">
          <img src="./Images/${items.id}.jpg" class="d-block h-75 w-100" alt="...">
            <div class="position-absolute start-50 bottom-0 translate-middle hide">
            <div class="d-flex">
              <div class="p-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
              </svg></div>
              <div class="p-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-handbag-fill" viewBox="0 0 16 16" onclick=addtocart(${items.id})>
                <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"/>
              </svg></div>
              <div class="p-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
              </svg></div>
            </div>
          </div>
        </div>
          <p>${items.name}</p>
          <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
          <h6>₹ ${items.specialprice}<span class="text-decoration-line-through">₹ ${items.price}</span></h6>
      </div>
        `
    })
}
displayproducts();
let cart=JSON.parse(localStorage.getItem("CART")) || [];
updatecart();
function addtocart(id)
{
    //check if product already exist
    if(cart.some((item)=>item.id===id))
    {
        changeqty("plus",id);
    }
    else
    {
        const item=products.find((product)=>product.id===id);
        cart.push({
            ...item,
            qty:1
        });
    }
    updatecart();
}
function updatecart()
{
    rendercartitems();
    rendersubtotal();
    localStorage.setItem("CART",JSON.stringify(cart));
}
function rendercartitems()
{
    cartitemsel.innerHTML="";
    cart.forEach((item)=>{
        cartitemsel.innerHTML+=`
        <table class="table w-100">
        <tbody>
        <tr><td><img src="./Images/${item.id}.jpg" height=50 width=50></td>
        <td><p style="font-size:13px;">${item.name}</p></td>
        <td>$${item.specialprice}</td>
        <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onclick="changeqty('minus',${item.id})">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
      </svg>${item.qty}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" onclick="changeqty('plus',${item.id})">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    </svg></td>
    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" onclick="removeitem(${item.id})">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg></td>
  </tr></tbody></table>`
    })
}
function changeqty(action,id)
{
    cart=cart.map((item)=>{
        let qty=item.qty;
        if(item.id===id)
        {
            if(action==="minus" && qty>1)
            {
                qty--;
            }
            else if(action==="plus" && qty<item.stock)
            {
                qty++;
            }
        }
        return {
            ...item,
            qty,
        };
    })
    updatecart();
}
function rendersubtotal()
{
    let totalprice=0,totalitems=0;
    cart.forEach((item)=>{
        totalprice+=item.specialprice*item.qty;
        totalitems+=item.qty;
    });
    subtotalel.innerHTML=`Subtotal(${totalitems} items):$${totalprice.toFixed(2)}`
    itemsincartel.innerHTML=totalitems;
}
function removeitem(id)
{
    cart=cart.filter((item)=>item.id!==id);
    updatecart();
}