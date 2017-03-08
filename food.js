// Your first task is to build a product page that displays all brands of dog food, 
// the different types, with the price and size for each container volume.
var foodBowl = document.getElementById("foodContainer");

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
	// for (var k = 0; k < xhrData.cat_brands.length; k++) {
	// 	currentFood = xhrData.cat_brands[k];

	// 	foodString += `<div class="col-sm-6 col-md-4">`;
	// 	foodString += `<div class="thumbnail">`;
	// 	foodString += `<div class="caption">`;
	// 	foodString += `<h4>Brand:</h4>`;
	// 	foodString += `<h4>${currentFood.name} Dog Food</h4>`;
	// 	foodString += `<p>Types:</p>`;
	// 	for (var l = 0; l < currentFood.types.length; l++) {
	// 		foodString += `<p>${currentFood.types[l].type}</p>`;
	// 		console.log(currentFood.types[l].type);
	// 		console.log(currentFood.types[l].volumes);
	// 		for (var m = 0; m < currentFood.types[l].volumes.length; m++) {
	// 			foodString += `<p>Size: ${currentFood.types[l].volumes[m].name}`;
	// 			foodString += `<p>$${currentFood.types[l].volumes[m].price}`;
	// 		}
	// 	}
	// 	foodString += `</div></div></div>`;
	// }	
	foodBowl.innerHTML = foodString;
}



function executeThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	makeDogFoodDom(data);
}

function executeThisCodeAfterFileFails(){
	console.log("booooo");
}

var dogFoodRequest = new XMLHttpRequest();
dogFoodRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
dogFoodRequest.addEventListener("error", executeThisCodeAfterFileFails);
dogFoodRequest.open("GET", "dogFood.json");
dogFoodRequest.send();
