// The Fetch API interface allows web browser to make HTTP requests to web servers.
// What is Web API?
// API stands for Application Programming Interface.
// A Web API is an application programming interface for the Web.
// A Browser API can extend the functionality of a web browser.
// A Server API can extend the functionality of a web server.




fetch('http://api.weatherapi.com/v1/current.json?key=5605e1b172124f2bb6760047242310&q=pakistan&aqi=no')
.then(function(response){
    return response.json()
}).then(function(data){
    // let firstIndex = data[0];
    console.log(data);
    
    console.log(data.current.temp_c);
})