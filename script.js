const config = require('./config');

var inputBox = document.getElementById("input");
var result = document.getElementById("result");
var cityName;

function getWord() {
    cityName = inputBox.value;
    let fetchResponse = fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName +"&appid=" + config.apiKey + "&units=metric");
    fetchResponse.then(res =>
        res.json()).then(jsonValue => {
            console.log(jsonValue);
            result.innerHTML = `Temperature of ${cityName[0].toUpperCase() + cityName.substring(1)} is ${jsonValue.main.temp} celcius`;
        })
}

//When enter key is also pressed, the function gets invoked
inputBox.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        getWord();
    }
});


//https://openweathermap.org/current#data