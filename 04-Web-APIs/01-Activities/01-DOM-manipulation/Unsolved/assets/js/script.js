// Create your HTML Page via DOM Methods here!

var body = document.body;

// TODO: Add a centered h1
var newHeader = document.createElement("header");
newHeader.innerHTML = "<h1 style='text-align: center;'>Title</h1>";
body.appendChild(newHeader);

// TODO: Add a centered h2
var newSection = document.createElement("section");
newSection.innerHTML = "<h2 style='text-align: center;'>Short description of website</h2>"
body.appendChild(newSection);

// TODO: Add a centered image with a centered caption under it
var newDiv = document.createElement("div");
newDiv.style.textAlign = "center";
body.appendChild(newDiv);

var centeredImg = document.createElement("img");
centeredImg.setAttribute("src", "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
centeredImg.setAttribute("alt", "This is a picture");
newDiv.appendChild(centeredImg);

var centeredCap = document.createElement("figcaption");
centeredCap.textContent = "This is a centered caption";
newDiv.appendChild(centeredCap);

// TODO: Add a list of your favorite foods (or other favorites)
var newDiv2 = document.createElement("div");
newDiv2.innerHTML = "<h3 id='favFoods'>List of favorite foods</h3>";
body.appendChild(newDiv2);

var newUl = document.createElement("ul");
newUl.innerHTML = "<li>Spaghetti</li><li>Pizza</li><li>Steak</li><li>Burgers</li>"
newDiv2.appendChild(newUl);

//alternative 
var newList = ["Pie", "Pizza", "Burgers"]
for (var i = 0; i < newList.length; i++) {
    var foodItem = document.createElement("li");
    foodItem.textContent = newList[i];
    newUl.appendChild(foodItem);
}
