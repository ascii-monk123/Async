function getWeather(woeid) {
  //Now we will fetch data from the Meta Weather Api using the fetch
  fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
    .then(result => {//the promise consumption returned a response object which was in Json format

      return result.json();//so we return and call the json method on the response object,which returns a promise which runs in the background and if the promise is fulfilled,we get an object containing weather data in the argument data,when we try to consume it using the then method,else if it ism't possible,we get an error
    })//promise here after previous method ends
    .then(data => {//promise getting consumed here
      console.log(data);//this data is an object which is converted from the json format
      const temp = data.
        consolidated_weather[0];
      console.log(`The weather-state at ${data.title} is  ${temp.weather_state_name} and the max temp is ${temp.max_temp.toFixed(2)} and the minimum temperature is ${temp.min_temp.toFixed(2)}`);
    })
    .catch(error => console.log('Sorry there was an error in fetching the data from the server'));
}
getWeather(28743736);
getWeather(2295386);