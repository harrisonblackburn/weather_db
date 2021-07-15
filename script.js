var weatherDetailsTableEl = document.getElementById('weatherDetailsTable')
// var forecastDetailsEl = document.getElementById('forecastDetails');

function getApi(city) {
    let requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&APPID=8b50af280b34989ae4a92a4a03f30c01';
    fetch(requestUrl)
    .then (function (res){
        return res.json();
    })
    .then(function (data){
        console.log(data);
    


    var tableRow = document.createElement('tr'); 

         tableRow.innerHTML = 
      
        `<td>  ${data.main.temp} F</td>
         <td> ${data.main.humidity} % </td>
         <td> ${data.wind.speed} MPH </td>`;

      weatherDetailsTable.append(tableRow);
      })
}

function fiveDayWeather(cityForecast) {
    let request = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityForecast +'&units=imperial&APPID=8b50af280b34989ae4a92a4a03f30c01';
    fetch(request)
    .then (function (res){
        return res.json();
    })
    .then(function (data){
        console.log(data);
        
    })
};





$(document).on('click', '#userInputCityButton', function (){
    var userInputCityEl = document.getElementById('userInputCity').value;
   
    getApi(userInputCityEl)
}); 

$(document).on('click', '#forecastButton', function (){
    var forecastCityEl = document.getElementById('forecastCity').value;
   
    fiveDayWeather(forecastCityEl)
}); 


