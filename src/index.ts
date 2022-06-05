import {
  addEvtListener,
  createElement,
  getElement,
  request,
  toggleClassList,
} from './helpers/index'

const appConfigs = function () {
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

const loaderIndicator = document.getElementsByTagName('i')

const changeRoute = function (queryParam: string) {
  var queryParams = new URLSearchParams(window.location.search)

  queryParams.set('name', queryParam)

  history.replaceState(null, null, `?${queryParams.toString()}`)
}

const getCountriesList = async function () {
  const { URL_ALL } = appConfigs()
  return await request(URL_ALL)
}

const renderList = function (list: []) {
  const listContainer = getElement('list-container')

  if (listContainer) listContainer.innerHTML = ''

  for (let item = 0; item < list.length; item++) {
    listContainer?.appendChild(
      createElement('div', list[item]['name']['common'], 'item-shadow', [
        { name: 'value', value: list[item]['name']['common'] },
      ]),
    )
  }
}

const chnageHandler = async function (query: string) {
  const { URL_BY_NAME, URL_ALL } = appConfigs()

  const loadingIndicator = toggleClassList(getElement('loading-indicator'))

  let result
  loadingIndicator('add', 'loader')

  if (query === '') {
    result = await request(URL_ALL)
  } else {
    result = await request(`${URL_BY_NAME}/name/${query}`)
  }

  loadingIndicator('remove', 'loader')

  renderList(result)
}

const itemOnClickHandler = function (value: string) {
  changeRoute(value)
}

async function init() {
  addEvtListener(getElement('inp'), 'input', chnageHandler)

  const list = await getCountriesList()
  renderList(list)

  const items = document.getElementsByClassName('item-shadow')

  //@ts-ignore
  for (let element of items) {
    addEvtListener(element, 'click', () =>
      itemOnClickHandler(element.getAttribute('value')),
    )
  }
}

init()
