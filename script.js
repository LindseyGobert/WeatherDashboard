// creating variable for the search area
let $citySearch = $("#citySearchArea");

let $cityName = $("#cityName");
let $cityTemp = $("#currentTemp");
let $cityHumidity = $("#currentHumidity");
let $cityWind = $("#currentWind");

function currentWeather() {
    let cityName = $("#citySearchArea").val();
    console.log(cityName);

    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + $cityName + "&appid=266cbb82563a29c5a93d841fb3bc4c5e";

    $.ajax({
        url: queryURL, 
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $(`<div class="card">
        <div class="card-body">
        <h4 class="card-title">${response.name}</h4>
        <p class="card-text">
        temp: ${((response.main.temp - 273.15)* 1.80 + 32).toFixed(2)}  
        </p>
        <p class="card-text">
        humidity: ${response.main.humidity}
        </p>
        <p class="card-text">
        wind: ${response.wind.speed}
        </p>
        </div>
        </div>`).appendTo("#currentWeather")
    });

};
currentWeather();

$("#citySearchBtn").on("click, cityNameSearch");

//preventDefault so that our search values don't disapear
$("#citySearchBtn").on("click", function (){
    event.preventDefault();
    $(`<p class="cityBtns">${$citySearch.val()}</p>`).appendTo("#cityBtn");
});

//creating a function so that the five day forcast appears
function fiveDayForecast() {
    let cityName = $("#citySearch").val();

    let queryURL = "api.openweathermap.org/data/2.5/forecast?q=" +cityName + "&appid=266cbb82563a29c5a93d841fb3bc4c5e";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        console.log(response);
        for (let i = 0; i < 5; i++) {
            $(`<div class="card fiveDayCard">
                <div class="card-body">
                <h5 class="card-title fiveDay">${response.city.name} (${response.list[i].dt_txt})
                </h5>
                <p class="card-text fiveDay">
                Temp: ${((response.main.temp - 273.15)* 1.80 + 32).toFixed(2)}
                </p>
                <p class="card-text fiveDay">
                Humidity: ${response.list[i].main.humidity}
                </p>
                </div>
                </div>`).appendTo("#fiveDayForecast");          
        }
    });
    
}
fiveDayForecast();

$("#cityList").on("click", fiveDayForecast);














    
    
    
    
    // function renderWeather () {
        
        
    //         let cityName = $("#currentCity").text(response.name)
    //         let cityTemp = $("#currentTemp").text("Temp: " + response.main.temp)
    //         let cityHumidity = $("#currentHumidity").text("Humidity: " + response.main.humidity)
    //         let cityWind = $("#currentWind").text("Wind Speed: " + response.wind.speed) 
    //         let cityWeather = $("#Weather")
    //         cityWeather.append(cityName, cityTemp, cityHumidity, cityWind)
    //     })
    // };
    // renderWeather();
        
    
        
    // })
    
    // let forcastURL = "https://api.openweathermap.org/data/2.5/forecast?q=Dallas,us&appid=" + APIKey;
    
    // $.ajax({
    //     url: forcastURL,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(response)
        
    //     $(`<div class="row">
    //     <div class="col-sm-6">
    //     <div class="card">
    //     <div class="card-body">
    //     <h5 class="card-title">${response.dt_txt}</h5>
    //     <p class="card-text">
    //     Temp: ${response.main.temp}
    //     </p>
    //     <p class="card-text">
    //     Temp: ${response.main.humidity}
    //     </p>
    //     </div>
    //     </div>
    //     </div>
    //     <div class="col-sm-6">
    //     <div class="card">
    //     <div class="card-body">
    //     <h5 class="card-title">Special title treatment</h5>
    //     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //     <a href="#" class="btn btn-primary">Go somewhere</a>
    //     </div>
    //     </div>
    //     </div>
    //     </div>`).appendTo(".container")
