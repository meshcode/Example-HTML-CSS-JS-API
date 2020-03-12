"use strict"

const theUrl = "http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=0ad7ac16b92770afe1dabcc2a08c1a9f"

$.ajax ({
    /*url is in the above variable */
    url: theUrl,
    /* upon success of retreive, put data into result, action goes into braces */
    success: function (result) {
        /*CREATES AND DISPLAYS OBJECT in console log (Dev Tools) confirm we got data: put the content of result into webpage */
        console.log(result);
        /*DISPLAYS NAME (from object) in console log: based on returned JSON parameters, a spot for the city name within the object is called name*/
        console.log(result.name)

        /*jQuery allows selecting elements and acting on them*/
        $("#location").text(result.name);

        /*calculate*/
        let F = Math.round(result.main.temp * (9/5) - 459.67);
        /*transform number from binary to displayable*/
        let Fahrenheit = F.toString();
        $("#temperature").text(Fahrenheit);

        let windSpeed = Math.round(result.wind.speed / .44704);
        let wind = windSpeed.toString();
        $("#wind").text(wind);

        /*an array is sequence of items starting at zero. In the object called result, there is an array item ZERO with an element called description*/
        $("#sky").text(result.weather[0].description);

    }
})

