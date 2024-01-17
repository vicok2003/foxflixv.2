'use strict';

const api_key = '117ed126c4e71d966f6a3f0dcc090446';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

// Fetch data from a server using 'url' and passes
// The result in JSON data to a callback function
// along with an optional  parameter if has "optionalParameter"

const fetchDataFromServer = function(url, callback, optionalParam) {
 fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
};


export { imageBaseURL, api_key, fetchDataFromServer };