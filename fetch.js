// 




fetch('http://api.weatherapi.com/v1/current.json?key=5605e1b172124f2bb6760047242310&q=pakistan&aqi=no')
.then(function(response){
    return response.json()
}).then(function(data){
    // let firstIndex = data[0];
    console.log(data);
    
    console.log(data.current.temp_c);
})