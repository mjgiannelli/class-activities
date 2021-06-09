// Write a fetch request to the Giphy API
// Then log the response in the console
function getGiphyApi() {
    var apiUrl = 'https://api.giphy.com/v1/gifs/trending?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN'
    fetch(apiUrl).then(function (data) {
        console.log(data);
    })
}

getGiphyApi();