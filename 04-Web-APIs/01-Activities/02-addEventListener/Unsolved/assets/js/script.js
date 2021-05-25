// TODO: Create a variable to hold the count
var counter = 0;
// TODO: Create variables to select the increment button, decrement button and count heading by their respective ids.
var incrBtn = document.querySelector("#increment");
var decrBtn = document.querySelector("#decrement");
// TODO: Create a function that displays the current count on the page
function currCount(event) {
    var targetEl = event.target;
    var count = document.querySelector("#count");

    if (targetEl.matches("#increment")) {
        counter++;
        count.textContent = counter;
    }
    else if (targetEl.matches("#decrement")) {
        counter--;
        count.textContent = counter;
    }

    console.log(counter);
}

// TODO: Create an addEventListener that will increment the count on click
// and calls the function to display the current count
decrBtn.addEventListener("click", currCount);
// TODO: Create an addEventListener that will decrement the count on click
// and calls the function to display the current count
incrBtn.addEventListener("click", currCount);

