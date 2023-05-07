const ApiRequest = {
    /**
     * Makes a get request to specified url
     * @param {String} url Adress to make GET request
     * @returns {Promise} The fetched data
     */
    get: async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    },
}


export default ApiRequest;