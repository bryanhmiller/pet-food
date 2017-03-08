// Your first task is to build a product page that displays all brands of dog food, 
// the different types, with the price and size for each container volume.
var foodBowl = document.getElementById("foodContainer");

function makeDom(xhrData){
	var foodString = "";
	var currentFood;
	for (var i = 0; i < xhrData.dog_brands.length; i ++) {
		currentFood = xhrData.dog_brands[i];

		foodString += `<div class="col-sm-6 col-md-4">`;
		foodString += `<div class="thumbnail">`;
		foodString += `<div class="caption">`;
		foodString += `<h4>Brand:</h4>`;
		foodString += `<h3>${currentFood.name}</h3>`;
		foodString += `<p>Types:</p>`;
		for (var q = 0; q < currentFood.types.length; q++) {
			foodString += `<p>${currentFood.types[q].type}</p>`;
			console.log(currentFood.types[q].type);
			console.log(currentFood.types[q].volumes);
			for (var j = 0; j < currentFood.types[q].volumes.length; j++) {
				foodString += `<p>Size: ${currentFood.types[q].volumes[j].name}`;
				foodString += `<p>$${currentFood.types[q].volumes[j].price}`;
			}
		}

		foodString += `</div></div></div>`;
	}	

	foodBowl.innerHTML = foodString;
}



function executeThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	makeDom(data);
}

function executeThisCodeAfterFileFails(){
	console.log("booooo");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dogFood.json");
myRequest.send();
