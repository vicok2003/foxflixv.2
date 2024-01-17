'use strict';



// Add event on multiple elements
const addEventOnElements = function (elements, eventType, callback) {
    for (const elem of elements) elem.addEventListener(eventType, callback);
}

// TOGGLE SEARCH BOX FOR MOBILE DEVICES
const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", function () {
    searchBox.classList.toggle("active");
});

//store movieId in 'localstorage' when you click any movie card

const getMovieDetail = function (movieId) {
    window.localStorage.setItem("movieId", String(movieId));
}