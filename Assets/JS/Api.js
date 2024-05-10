'use strict';

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTdlZDEyNmM0ZTcxZDk2NmY2YTNmMGRjYzA5MDQ0NiIsInN1YiI6IjY1M2Y3ZGYyY2M5NjgzMDEyY2Y0ZWZiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LsHsVO2NJsSkM5mwQekGLqHI1qm7_vmmmtsZ878UJmk'; 
const api_key = '117ed126c4e71d966f6a3f0dcc090446';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

// Fetch data from a server using 'url' and passes
// The result in JSON data to a callback function
// along with an optional  parameter if has "optionalParameter"

const fetchDataFromServer = function(url, callback, optionalParam) {

    const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      };

 fetch(url, options)
    .then(response => response.json())
    .then(data => callback(data, optionalParam))
    .catch(error => console.error(error));
};


export { imageBaseURL, api_key, fetchDataFromServer };