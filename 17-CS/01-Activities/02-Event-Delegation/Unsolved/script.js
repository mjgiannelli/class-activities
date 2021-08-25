const listEl = document.querySelector('#grocery-list');
const shoppingCartEl = document.querySelector('#shopping-cart');
const fruits = ['Bananas', 'Apples', 'Oranges', 'Grapes', 'Blueberries'];

// Create an event listener on the common parent element of the groceries
listEl.addEventListener('click', (event) => {

    event.preventDefault();

    if (event.target.matches('button')) {
        let id = event.target.closest('li').id

        let shoppingItem = document.createElement('div').innerText = fruits[id]
        shoppingItem.textContent = fruits[id];

        shoppingCartEl.append(shoppingItem);
    }

})
//
// Inside the closure, for every click of the button, create a `div` element
// that will hold the name of the fruit
// and append it to the shopping cart
// YOUR CODE HERE
//
