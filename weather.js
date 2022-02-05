//Runs when the user clicks the submit button in the form
function changeWeather() {
      $.ajax({
        //Collects data on the grid location using the latitude and longitude entered by the user
        url: "https://api.weather.gov/points/" + (document.getElementById("Latitude").value) + "," + (document.getElementById("Longitude").value)
      }).then(function(data) {
        //Saves the grid location and office Id # in variables for use with the next API call
        var gridId = (data.properties.gridId);
        var gridX = (data.properties.gridX);
        var gridY = (data.properties.gridY);
        $.ajax({
          //Collects forecast info from a specific location based on the grid data obtained in the last API call
          url: "https://api.weather.gov/gridpoints/" + gridId + "/" + gridX + "," + gridY + "/forecast"
        }).then(function(forecast) {
          //Collects the name, temp, and forecast properties from the last API call and inserts the info
          //as a 7 day forecast into the HTML page
          $('.day1').html(forecast.properties.periods[0].name);
          $('.day1-temp').html(forecast.properties.periods[0].temperature + " F");
          $('.day1-forecast').html(forecast.properties.periods[0].shortForecast);
          $('.night1').html(forecast.properties.periods[1].name);
          $('.night1-temp').html(forecast.properties.periods[1].temperature + " F");
          $('.night1-forecast').html(forecast.properties.periods[1].shortForecast);
          $('.day2').html(forecast.properties.periods[2].name);
          $('.day2-temp').html(forecast.properties.periods[2].temperature + " F");
          $('.day2-forecast').html(forecast.properties.periods[2].shortForecast);
          $('.night2').html(forecast.properties.periods[3].name);
          $('.night2-temp').html(forecast.properties.periods[3].temperature + " F");
          $('.night2-forecast').html(forecast.properties.periods[3].shortForecast);
          $('.day3').html(forecast.properties.periods[4].name);
          $('.day3-temp').html(forecast.properties.periods[4].temperature + " F");
          $('.day3-forecast').html(forecast.properties.periods[4].shortForecast);
          $('.night3').html(forecast.properties.periods[5].name);
          $('.night3-temp').html(forecast.properties.periods[5].temperature + " F");
          $('.night3-forecast').html(forecast.properties.periods[5].shortForecast);
          $('.day4').html(forecast.properties.periods[6].name);
          $('.day4-temp').html(forecast.properties.periods[6].temperature + " F");
          $('.day4-forecast').html(forecast.properties.periods[6].shortForecast);
          $('.night4').html(forecast.properties.periods[7].name);
          $('.night4-temp').html(forecast.properties.periods[7].temperature + " F");
          $('.night4-forecast').html(forecast.properties.periods[7].shortForecast);
          $('.day5').html(forecast.properties.periods[8].name);
          $('.day5-temp').html(forecast.properties.periods[8].temperature + " F");
          $('.day5-forecast').html(forecast.properties.periods[8].shortForecast);
          $('.night5').html(forecast.properties.periods[9].name);
          $('.night5-temp').html(forecast.properties.periods[9].temperature + " F");
          $('.night5-forecast').html(forecast.properties.periods[9].shortForecast);
          $('.day6').html(forecast.properties.periods[10].name);
          $('.day6-temp').html(forecast.properties.periods[10].temperature + " F");
          $('.day6-forecast').html(forecast.properties.periods[10].shortForecast);
          $('.night6').html(forecast.properties.periods[11].name);
          $('.night6-temp').html(forecast.properties.periods[11].temperature + " F");
          $('.night6-forecast').html(forecast.properties.periods[11].shortForecast);
          $('.day7').html(forecast.properties.periods[12].name);
          $('.day7-temp').html(forecast.properties.periods[12].temperature + " F");
          $('.day7-forecast').html(forecast.properties.periods[12].shortForecast);
          $('.night7').html(forecast.properties.periods[13].name);
          $('.night7-temp').html(forecast.properties.periods[13].temperature + " F");
          $('.night7-forecast').html(forecast.properties.periods[13].shortForecast);
      });
    });
  };