let addToCartBtn1 = document.querySelector('.addToCartBtn1');
let addToCartBtn2 = document.querySelector('.addToCartBtn2');
let addToCartBtn3 = document.querySelector('.addToCartBtn3');
let addToCartBtn4 = document.querySelector('.addToCartBtn4');
let addToCartBtn5 = document.querySelector('.addToCartBtn5');
let addToCartBtn6 = document.querySelector('.addToCartBtn6');
let addToCartBtn7 = document.querySelector('.addToCartBtn7');
let addToCartBtn8 = document.querySelector('.addToCartBtn8');
let addToCartBtn9 = document.querySelector('.addToCartBtn9');
let addToCartBtn10 = document.querySelector('.addToCartBtn10');
let addToCartBtn11= document.querySelector('.addToCartBtn11');
let addToCartBtn12 = document.querySelector('.addToCartBtn12');
let addToCartBtn13 = document.querySelector('.addToCartBtn13');
let addToCartBtn14 = document.querySelector('.addToCartBtn14');
let addToCartBtn15 = document.querySelector('.addToCartBtn15');
let addToCartBtn16 = document.querySelector('.addToCartBtn16');
let addToCartBtn17 = document.querySelector('.addToCartBtn17');
let addToCartBtn18 = document.querySelector('.addToCartBtn18');

addToCartBtn1.addEventListener('click', () => {
 setTimeout(changeText, 500)
})

addToCartBtn2.addEventListener('click', () => {
 setTimeout(changeText, 500)
})

addToCartBtn3.addEventListener('click', () => {
 setTimeout(changeText, 500)
})

addToCartBtn4.addEventListener('click', () => {
 setTimeout(changeText, 500)
})

addToCartBtn5.addEventListener('click', () => {
 setTimeout(changeText, 500)
})

addToCartBtn6.addEventListener('click', () => {
 setTimeout(changeText, 500)
})

addToCartBtn7.addEventListener('click', () => {
 setTimeout(changeText, 500)
})

addToCartBtn8.addEventListener('click', () => {
 setTimeout(changeText, 500)
})

addToCartBtn9.addEventListener('click', () => {
 setTimeout(changeText, 500)
})

addToCartBtn10.addEventListener('click', () => {
 setTimeout(changeText, 500)
})

addToCartBtn11.addEventListener('click', () => {
 setTimeout(changeText, 500)
})

addToCartBtn12.addEventListener('click', () => {
 setTimeout(changeText, 500)
})

addToCartBtn13.addEventListener('click', () => {
 setTimeout(changeText, 500)
})

addToCartBtn14.addEventListener('click', () => {
 setTimeout(changeText, 500)
})

addToCartBtn15.addEventListener('click', () => {
 setTimeout(changeText, 500)
})

addToCartBtn16.addEventListener('click', () => {
 setTimeout(changeText, 500)
})

addToCartBtn17.addEventListener('click', () => {
 setTimeout(changeText, 500)
})

addToCartBtn18.addEventListener('click', () => {
 setTimeout(changeText, 500)
})

function changeText(){
  addToCartBtn1.innerHTML = "Added";
  setTimeout(changeTextBack, 2000)
}

function changeTextBack(){
  addToCartBtn1.innerHTML = "Add to Cart";
}



















let item1Name = document.querySelector('.item1Name');
let item2Name = document.querySelector('.item2Name');
let item3Name = document.querySelector('.item3Name');
let item4Name = document.querySelector('.item4Name');
let item5Name = document.querySelector('.item5Name');
let item6Name = document.querySelector('.item6Name');
let item7Name = document.querySelector('.item7Name');
let item8Name = document.querySelector('.item8Name');
let item9Name = document.querySelector('.item9Name');
let item10Name = document.querySelector('.item10Name');
let item11Name = document.querySelector('.item11Name');
let item12Name = document.querySelector('.item12Name');
let item13Name = document.querySelector('.item13Name');
let item14Name = document.querySelector('.item14Name');
let item15Name = document.querySelector('.item15Name');
let item16Name = document.querySelector('.item16Name');
let item17Name = document.querySelector('.item17Name');
let item18Name = document.querySelector('.item18Name');

let item1Price = document.querySelector('.item1Price');
let item2Price = document.querySelector('.item2Price');
let item3Price = document.querySelector('.item3Price');
let item4Price = document.querySelector('.item4Price');
let item5Price = document.querySelector('.item5Price');
let item6Price = document.querySelector('.item6Price');
let item7Price = document.querySelector('.item7Price');
let item8Price = document.querySelector('.item8Price');
let item9Price = document.querySelector('.item9Price');
let item10Price = document.querySelector('.item10Price');
let item11Price = document.querySelector('.item11Price');
let item12Price = document.querySelector('.item12Price');
let item13Price = document.querySelector('.item13Price');
let item14Price = document.querySelector('.item14Price');
let item15Price = document.querySelector('.item15Price');
let item16Price = document.querySelector('.item16Price');
let item17Price = document.querySelector('.item17Price');
let item18Price = document.querySelector('.item18Price');


addToCartBtn1.addEventListener('click', addItem1ToCart);
addToCartBtn2.addEventListener('click', addItem2ToCart);
addToCartBtn3.addEventListener('click', addItem3ToCart);
addToCartBtn4.addEventListener('click', addItem4ToCart);
addToCartBtn5.addEventListener('click', addItem5ToCart);
addToCartBtn6.addEventListener('click', addItem6ToCart);
addToCartBtn7.addEventListener('click', addItem7ToCart);
addToCartBtn8.addEventListener('click', addItem8ToCart);
addToCartBtn9.addEventListener('click', addItem9ToCart);
addToCartBtn10.addEventListener('click', addItem10ToCart);
addToCartBtn11.addEventListener('click', addItem11ToCart);
addToCartBtn12.addEventListener('click', addItem12ToCart);
addToCartBtn13.addEventListener('click', addItem13ToCart);
addToCartBtn14.addEventListener('click', addItem14ToCart);
addToCartBtn15.addEventListener('click', addItem15ToCart);
addToCartBtn16.addEventListener('click', addItem16ToCart);
addToCartBtn17.addEventListener('click', addItem17ToCart);
addToCartBtn18.addEventListener('click', addItem18ToCart);

let totalItemNames = [];
let totalItemPrice = [];

function addItem1ToCart(){
  let name = item1Name.innerHTML
  let price = item1Price.innerHTML
  totalItemNames.push(name)
  totalItemPrice.push(price)
  console.log(totalItemNames)
  console.log(totalItemPrice)
}

function addItem2ToCart(){
  let name = item2Name.innerHTML
  let price = item2Price.innerHTML
  totalItemNames.push(name)
  totalItemPrice.push(price)
  console.log(totalItemNames)
  console.log(totalItemPrice)
}

function addItem3ToCart(){
  let name = item3Name.innerHTML
  let price = item3Price.innerHTML
  totalItemNames.push(name)
  totalItemPrice.push(price)
  console.log(totalItemNames)
  console.log(totalItemPrice)
}

function addItem4ToCart(){
  let name = item4Name.innerHTML
  let price = item4Price.innerHTML
  totalItemNames.push(name)
  totalItemPrice.push(price)
  console.log(totalItemNames)
  console.log(totalItemPrice)
}

function addItem5ToCart(){
  let name = item5Name.innerHTML
  let price = item5Price.innerHTML
  totalItemNames.push(name)
  totalItemPrice.push(price)
  console.log(totalItemNames)
  console.log(totalItemPrice)
}

function addItem6ToCart(){
  let name = item6Name.innerHTML
  let price = item6Price.innerHTML
  totalItemNames.push(name)
  totalItemPrice.push(price)
  console.log(totalItemNames)
  console.log(totalItemPrice)
}

function addItem7ToCart(){
  let name = item7Name.innerHTML
  let price = item7Price.innerHTML
  totalItemNames.push(name)
  totalItemPrice.push(price)
  console.log(totalItemNames)
  console.log(totalItemPrice)
}

function addItem8ToCart(){
  let name = item8Name.innerHTML
  let price = item8Price.innerHTML
  totalItemNames.push(name)
  totalItemPrice.push(price)
  console.log(totalItemNames)
  console.log(totalItemPrice)
}

function addItem9ToCart(){
  let name = item9Name.innerHTML
  let price = item9Price.innerHTML
  totalItemNames.push(name)
  totalItemPrice.push(price)
  console.log(totalItemNames)
  console.log(totalItemPrice)
}

function addItem10ToCart(){
  let name = item10Name.innerHTML
  let price = item10Price.innerHTML
  totalItemNames.push(name)
  totalItemPrice.push(price)
  console.log(totalItemNames)
  console.log(totalItemPrice)
}

function addItem11ToCart(){
  let name = item11Name.innerHTML
  let price = item11Price.innerHTML
  totalItemNames.push(name)
  totalItemPrice.push(price)
  console.log(totalItemNames)
  console.log(totalItemPrice)
}

function addItem12ToCart(){
  let name = item12Name.innerHTML
  let price = item12Price.innerHTML
  totalItemNames.push(name)
  totalItemPrice.push(price)
  console.log(totalItemNames)
  console.log(totalItemPrice)
}

function addItem13ToCart(){
  let name = item13Name.innerHTML
  let price = item13Price.innerHTML
  totalItemNames.push(name)
  totalItemPrice.push(price)
  console.log(totalItemNames)
  console.log(totalItemPrice)
}

function addItem14ToCart(){
  let name = item14Name.innerHTML
  let price = item14Price.innerHTML
  totalItemNames.push(name)
  totalItemPrice.push(price)
  console.log(totalItemNames)
  console.log(totalItemPrice)
}

function addItem15ToCart(){
  let name = item15Name.innerHTML
  let price = item15Price.innerHTML
  totalItemNames.push(name)
  totalItemPrice.push(price)
  console.log(totalItemNames)
  console.log(totalItemPrice)
}

function addItem16ToCart(){
  let name = item16Name.innerHTML
  let price = item16Price.innerHTML
  totalItemNames.push(name)
  totalItemPrice.push(price)
  console.log(totalItemNames)
  console.log(totalItemPrice)
}

function addItem17ToCart(){
  let name = item17Name.innerHTML
  let price = item17Price.innerHTML
  totalItemNames.push(name)
  totalItemPrice.push(price)
  console.log(totalItemNames)
  console.log(totalItemPrice)
}

function addItem18ToCart(){
  let name = item18Name.innerHTML
  let price = item18Price.innerHTML
  totalItemNames.push(name)
  totalItemPrice.push(price)
  console.log(totalItemNames)
  console.log(totalItemPrice)
}

const open = document.getElementById('shopBtn');
const shopCart = document.getElementById('shopCart');
const close = document.getElementById('closeCart');
const shopCartItems = document.getElementById('shopCartItems');
const shopCartPrices = document.getElementById('shopCartPrices');

open.addEventListener('click', () => {
  var itemsName= document.createElement('p')
  
  for (i = 0; i < totalItemNames.length; i++){
    itemsName.innerHTML += totalItemNames[i]
    itemsName.innerHTML += "<br>"
  }
  
  shopCartItems.innerHTML = itemsName.innerHTML
  console.log(itemsName.innerHTML)
  
  var itemsPrice = document.createElement('p')
  
  for (i = 0; i < totalItemPrice.length; i++){
    itemsPrice.innerHTML += totalItemPrice[i]
    itemsPrice.innerHTML += "<br>"
  }
  shopCartPrices.innerHTML = itemsPrice.innerHTML
  console.log(itemsPrice.innerHTML)
  
})



open.addEventListener('click', () => {
  shopCart.style.opacity = "1";
  shopCart.style.pointerEvents = "auto";
});

close.addEventListener('click', () => {
  shopCart.style.opacity = "0";
  shopCart.style.pointerEvents = "none";
});
