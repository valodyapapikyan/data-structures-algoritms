export const appConfigs = function () {
  const URL_ALL = `https://restcountries.com/v3.1/all`
  const URL_BY_NAME = `https://restcountries.com/v3.1`
  const key = 'name'
  const WEATHER_BASE_API = `http://api.weatherapi.com/v1/current.json`
  const WEATHER_API_KEY = `bfc671633a6145979cd84623220406`

  return {
    URL_ALL,
    URL_BY_NAME,
    WEATHER_API_KEY,
    key,
    WEATHER_BASE_API,
  }
}
