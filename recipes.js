/* 
Eat at Home (project 1)
Author: Eric Perry
Date: 8/5/20
*/
"use strict"

document.getElementById('chicken-button').addEventListener('click', chickenRecipe);

document.getElementById('beef-button').addEventListener('click', beefRecipe);

document.getElementById('vegan-button').addEventListener('click', veganRecipe);

document.getElementById('fish-button').addEventListener('click', fishRecipe);
	
function chickenRecipe() {
	document.getElementById('chicken-recipe').style.display = "block";
};

function beefRecipe() {
	document.getElementById('beef-recipe').style.display = "block";
};

function veganRecipe() {
	document.getElementById('vegan-recipe').style.display = "block";
};

function fishRecipe() {
	document.getElementById('fish-recipe').style.display = "block";
};
