// add pageTitle
const pageTitle = 'My Shopping List';
// add groceries
let groceries = ['Soap', 'Cereal', 'Milk', 'Eggs', 'Frozen Dinner',
'Laundry Detergent', 'Salty Snacks', 'Packaged Meats', 'Bread', 'Soda'];
/**
 * This function will get a reference to the title and set its text to the value
 * of the pageTitle variable that was set above.
 */
function setPageTitle() {
  let title = document.getElementById('title');
  title.innerText = pageTitle;
}
 
/**
 * This function will loop over the array of groceries that was set above and add them to the DOM.
 */
function displayGroceries() {
  const groceryList = document.getElementById('groceries');
  groceries.forEach((item) => {
    const list  = document.createElement('li');
    list.innerText = item;
    groceryList.appendChild(list);
  }); 

}

/**
 * This function will be called when the button is clicked. You will need to get a reference
 * to every list item and add the class completed to each one
 */
function markCompleted() {
  let list = document.getElementById('groceries');
  let listItems = list.querySelectorAll('li');

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.add('completed');
  }
}

setPageTitle();

displayGroceries();

// Don't worry too much about what is going on here, we will cover this when we discuss events.
document.addEventListener('DOMContentLoaded', () => {
  // When the DOM Content has loaded attach a click listener to the button
  const button = document.querySelector('.btn');
  button.addEventListener('click', markCompleted);
});
