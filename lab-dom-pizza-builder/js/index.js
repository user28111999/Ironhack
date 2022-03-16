// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
}

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible'
    } else {
      onePep.style.visibility = 'hidden'
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible'
    } else {
      oneMush.style.visibility = 'hidden'
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onePepper => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible'
    } else {
      onePepper.style.visibility = 'hidden'
    }
  })
}

function renderWhiteSauce() {
   document.querySelectorAll('.sauce-white').forEach(sauce => {
    if (state.whiteSauce) {
      sauce.style.visibility = 'visible'
    } else {
      sauce.style.visibility = 'hidden'
    }
  })
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust-gluten-free').forEach(glutenFreeCrust => {
    if (state.glutenFreeCrust) {
      glutenFreeCrust.style.visibility = 'visible'
    } else {
      glutenFreeCrust.style.visibility = 'hidden'
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  
  const renderBtn = (state, selector) => {
    if (!state) return document.querySelector(selector).classList.add("active")
    return document.querySelector(selector).classList.remove("active")
  }

  renderBtn(state.mushrooms, ".btn-mushrooms")
  renderBtn(state.greenPeppers, ".btn-green-peppers")
  renderBtn(state.whiteSauce, ".btn-sauce")
  renderBtn(state.mushrooms, ".btn-mushrooms")

  if (state.pepperoni) {
    document.querySelector(".btn-pepperoni").classList.add("active")
  } else {
    document.querySelector(".btn-pepperoni").classList.remove("active")
  } 
  
  if (state.glutenFreeCrust) {
    document.querySelector(".btn-crust").classList.add("active")
  } else {
    document.querySelector(".btn-crust").classList.remove("active")
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice
  let cart = document.querySelector('aside.panel.price ul')
  cart.innerHTML = ""
  
  for (let i in ingredients) {
    if (!state[i]) continue
    totalPrice += ingredients[i].price
    cart.innerHTML += `<li>$${ingredients[i].price} ${ingredients[i].name.toLowerCase()}</li>`
  }
  
  document.querySelector('aside.panel.price strong').innerHTML = "$" + totalPrice
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni
  renderEverything()
})


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").addEventListener("click", () => {
	state.greenPeppers = !state.greenPeppers
	renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
	state.whiteSauce = !state.whiteSauce
	renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", () => {
	state.glutenFreeCrust = !state.glutenFreeCrust
	renderEverything()
})
