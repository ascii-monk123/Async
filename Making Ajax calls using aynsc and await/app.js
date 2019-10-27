async function getWeather(woeid) {
  try {
    const info = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
    console.log(info);
    const data = await info.json();
    const disp = data.consolidated_weather[1];
    console.log(`The temperature in ${data.title} tomorrow lies between ${disp.min_temp.toFixed(2)} degree Celsius and ${disp.max_temp.toFixed(2)}  degree celsius.`);
  }
  catch (error) {
    prompt(error);

  }
}

getWeather(44418);
getWeather(28743736);

//Now we learn to return from an async function

async function getWeather2(woeid) {
  try {
    const info = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
    console.log(info);
    const data = await info.json();//here we can say that we are returning this resolved promise and then using then on that promise
    const disp = data.consolidated_weather[1];
    console.log(`The temperature in ${data.title} tomorrow lies between ${disp.min_temp.toFixed(2)} degree Celsius and ${disp.max_temp.toFixed(2)}  degree celsius.`);
    return data;//This is the resolved promise data that we get once we await it.So basically returns a promise if it's resolved
  }
  catch (error) {
    prompt(error);

  }
}

getWeather2(44418).then(data => {
  console.log(data);
})
  .catch(error => console.log('Oops we seem to be having some problem'))
//that fixes all error