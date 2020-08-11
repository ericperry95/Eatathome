/* 
Eat at Home (project 1)
Author: Eric Perry
Date: 8/5/20
*/
"use strict"

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
});