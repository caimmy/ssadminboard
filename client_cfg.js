/**
 * used to config server relation informations.
 */
var server_host = 'http://localhost:8888/';


/**
 * Fetch the api address 
 * @param {string} api api command
 * @returns {string}
 */
function GetApiAddress(api) {
    return server_host + api;
}