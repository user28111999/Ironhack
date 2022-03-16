// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  var subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = +price.innerHTML * quantity.value;
  
  return +subtotal.innerHTML;
}

function sum(arr) {
  let result = 0
  arr.forEach((n) => result += +n.textContent)
  return result
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  const allProducts = document.querySelectorAll(".product")
  const subTotals = document.querySelectorAll(".subtotal span")
  const eachSubTotal = document.querySelectorAll(".subtotal span")

  allProducts.forEach((product) => {
    updateSubtotal(product)
  })

  subTotals.forEach((subTotal) => {
    subTotal.innerText
  })

  document.getElementById("totalNbr").innerText = sum(eachSubTotal)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let quantity = document.querySelectorAll(".quantity");
  quantity.forEach((el) => {
    el.parentElement.parentElement.remove();
  })
  calculateAll()
}

// ITERATION 5

function createProduct() {
  let body = document.querySelector("tbody");
      body.innerHTML += `<tr class="product">
    <td class="name">
      <span>productPrice.value</span>
    </td>
    <td class="price">$<span>productPrice.value</span></td>
    <td class="quantity">
      <input type="number" value="1" min="1" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>10</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
    </tr>`;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeBtn = document.querySelector(".btn-remove")
  removeBtn.addEventListener("click", removeProduct)

  const createBtn = document.querySelector("#create")
  createBtn.addEventListener("click", createProduct)
});
