// Your first task is to build a product page that displays all brands of dog food, 
// the different types, with the price and size for each container volume.
var dogFoodBowl = document.getElementById("dogFoodContainer");
var catFoodBowl = document.getElementById("catFoodContainer");

function makeDogFoodDom(xhrData){
	var foodString = "";
	var currentFood;
	for (var i = 0; i < xhrData.dog_brands.length; i++) {
		currentFood = xhrData.dog_brands[i];

		foodString += `<div class="col-sm-6 col-md-4">`;
		foodString += `<div class="thumbnail">`;
		foodString += `<div class="caption">`;
		foodString += `<h4>Brand:</h4>`;
		foodString += `<h4>${currentFood.name} Dog Food</h4>`;
		foodString += `<p>Types:</p>`;
		for (var j = 0; j < currentFood.types.length; j++) {
			foodString += `<p>${currentFood.types[j].type}</p>`;
			console.log(currentFood.types[j].type);
			console.log(currentFood.types[j].volumes);
			for (var k = 0; k < currentFood.types[j].volumes.length; k++) {
				foodString += `<p>Size: ${currentFood.types[j].volumes[k].name}`;
				foodString += `<p>$${currentFood.types[j].volumes[k].price}`;
			}
		}
		foodString += `</div></div></div>`;
	}	
	dogFoodBowl.innerHTML = foodString;
}

function makeCatFoodDom(xhrData){
	var foodString = "";
	var currentFood;
	for (var l = 0; l < xhrData.cat_brands.length; l++) {
		currentFood = xhrData.cat_brands[l];

		foodString += `<div class="col-sm-6 col-md-4">`;
		foodString += `<div class="thumbnail">`;
		foodString += `<div class="caption">`;
		foodString += `<h4>Brand:</h4>`;
		foodString += `<h4>${currentFood.name} Cat Food</h4>`;
		foodString += `<h5>Breeds: ${currentFood.breeds}</h5>`;
		foodString += `<p>Types:</p>`;
		for (var m = 0; m < currentFood.types.length; m++) {
			foodString += `<p>${currentFood.types[m].type}</p>`;
			console.log(currentFood.types[m].type);
			console.log(currentFood.types[m].volumes);
			for (var n = 0; n < currentFood.types[m].volumes.length; n++) {
				foodString += `<p>Size: ${currentFood.types[m].volumes[n].name}`;
				foodString += `<p>$${currentFood.types[m].volumes[n].price}`;
			}
		}
		foodString += `</div></div></div>`;
	}	
	catFoodBowl.innerHTML = foodString;
}

function dogFoodMakerLoaded(){
	var dogData = JSON.parse(this.responseText);
	makeDogFoodDom(dogData);
}

function catFoodMakerLoaded(){
	var catData = JSON.parse(this.responseText);
	makeCatFoodDom(catData);
}

function petFoodFail(){
	console.log("booooo");
}

var dogFoodRequest = new XMLHttpRequest();
dogFoodRequest.addEventListener("load", dogFoodMakerLoaded);
dogFoodRequest.addEventListener("error", petFoodFail);
dogFoodRequest.open("GET", "dogFood.json");
dogFoodRequest.send();

var catFoodRequest = new XMLHttpRequest();
catFoodRequest.addEventListener("load", catFoodMakerLoaded);
catFoodRequest.addEventListener("error", petFoodFail);
catFoodRequest.open("GET", "catFood.json");
catFoodRequest.send();
