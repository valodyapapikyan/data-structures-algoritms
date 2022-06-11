export const appConfigs = function () {

  const URL_ALL = `https://restcountries.com/v3.1/all`
  const URL_BY_NAME = `https://restcountries.com/v3.1`
  const key = 'name'
  const WEATHER_BASE_API = `http://api.weatherapi.com/v1/current.json`
  const WEATHER_API_KEY = `437bf210d10dea71a3f1cc68be725502  `


  const weatherUrl = ([lat, lon]: number []) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
  }

  return {
    URL_ALL,
    URL_BY_NAME,
    WEATHER_API_KEY,
    key,
    WEATHER_BASE_API,
    weatherUrl
  }

}

