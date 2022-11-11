// fetch('https://fakestoreapi.com/carts')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

let theCart = document.querySelector(".cart");

async function getACart() {
  return await fetch("https://fakestoreapi.com/carts/1").then((res) =>
    res.json()
  );
}

let cart = await getACart();
console.log(cart);

async function getAllProducts() {
  return await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
}

let allProducts = await getAllProducts();
console.log(allProducts);

let productsInCart = cart.products
console.log(productsInCart)


function render(products) {
  theCart.innerHTML = ""
  let total = 0
  for (let product of products) {
    let theProduct = allProducts.filter(x => product.productId === x.id)[0]
    console.log(theProduct)
    let content = `<div class="product row">
    <div class="col-6">${theProduct.title}</div>
    <div class="price col-2">${theProduct.price}</div>
    <div class="quantity col-2">
                    <div class="minus-outer minus ${theProduct.id}"><i class="bi bi-dash minus ${theProduct.id}"></i></div>  
                    <div class="input"><input class="input-quantity ${theProduct.id}" type="text" value="${product.quantity}"></div>
                    <div class="plus-outer plus ${theProduct.id}"><i class="bi bi-plus plus ${theProduct.id}"></i></div>
    </div>
    <div class="total col-2">${theProduct.price * product.quantity}</div>
    </div>`
    theCart.innerHTML += content
    total += theProduct.price * product.quantity
  }
  theCart.innerHTML += `<div class="row"><div class="all-total ms-auto col-2">Total cart</div><div class="total col-2">${total}</div></div>`
}

render(productsInCart)

theCart.addEventListener('click', function(event) {
  let className = event.target.className
  let theId = className.match(/\d+/)[0]
  if (className.includes('plus')) {
    productsInCart.filter(x => x.productId == theId)[0].quantity += 1
    render(productsInCart)
  }
  if (className.includes('minus')) {
    let product = productsInCart.filter(x => x.productId == theId)[0]
    if (product.quantity > 0) {
      product.quantity--
    }
    render(productsInCart)
  }
})

theCart.addEventListener('input', function(event) {
  let className = event.target.className
  let theId = className.match(/\d+/)[0]
  let value = event.target.value
  if (value >= 0) {
    productsInCart.filter(x => x.productId == theId)[0].quantity = value
    render(productsInCart)
  }
  console.log(className, event.target.value)
})










