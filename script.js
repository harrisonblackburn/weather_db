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

function displayFiveDayWeather(dataListItems) {

    // console log to see what data is attached
    console.log(dataListItems);

    // create an array to hold days for weather
    var cleanFiveDays = [];

    // for loop that takes the weather only at 0 hours, so that it returns only for days not every 3 hours
    for (var i = 0; i < dataListItems.length; i++) {
        if (dataListItems[i].dt_txt.split(" ")[1] === "00:00:00") {
            cleanFiveDays.push(dataListItems[i]);
        }
    }

    // console log just to see whats happening
    console.log(cleanFiveDays);

    // empty the five day cards for new input
    fiveDayForecastCardsEl.innerHTML = "";

    // create five cards to display weather each day
    for (var i = 0; i < cleanFiveDays.length; i++) {

        // concatenate the image file name with the url for image thumbnails
        // ERROR Fixed: api calls must use HTTPS not HTTP, browser requires it to be more secure
        var weatherIconVariable = "https://openweathermap.org/img/w/" +
            cleanFiveDays[i].weather[0].icon + ".png";

        // create the cards
        var card = `<div class="card text-white bg-primary mb-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${cleanFiveDays[i].dt_txt.split(" ")[0]}</h5>
          <p class="card-text"><img alt='cardweatherdetails' src='${weatherIconVariable}'></img><br>
          Temp: ${cleanFiveDays[i].main.temp} F<br
          >Humidity: ${cleanFiveDays[i].main.humidity}%</p>
        </div>
      </div>`;

        //   write the data to the page, += so it adds each time and doesn't erase itself
        fiveDayForecastCardsEl.innerHTML += card;
    }
}





$(document).on('click', '#userInputCityButton', function (){
    var userInputCityEl = document.getElementById('userInputCity').value;
   
    getApi(userInputCityEl)
}); 

$(document).on('click', '#forecastButton', function (){
    var forecastCityEl = document.getElementById('forecastCity').value;
   
    displayFiveDayWeather(forecastCityEl)
}); 


