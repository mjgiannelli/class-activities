function myFunction() {
  var searchTerm = document.getElementById('searchTerm').value;
  // Create a variable to hold the value of rating
  var ratingSelector = document.getElementById('ratings-select').selectedIndex;
  var rating = document.getElementsByTagName('option')[ratingSelector].value;
  console.log(rating);
  //
  fetch(
    'https://api.giphy.com/v1/gifs/search?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&q=' + searchTerm + '&rating=' + rating
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response.data[0]);
      var responseContainerEl = document.querySelector('#response-container');
      responseContainerEl.innerHTML = '';
      var gifImg = document.createElement('img');
      gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
      responseContainerEl.appendChild(gifImg);
    });
}
