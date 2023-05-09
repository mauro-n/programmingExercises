
const apiRequest = {};

/**
* Makes a get request to specified url
* @param {String} url Adress to make GET request
* @returns {Promise} The fetched data
*/

apiRequest.get = function (url) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data);
}

export default apiRequest;