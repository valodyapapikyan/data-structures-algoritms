import { HtmlClassListActions } from '../enums/index'
import { IAttribute } from '../types/index'

export const setAttribute = (target: HTMLElement, attributes: [IAttribute]) => {
  attributes.forEach(({ name, value }) => {
    target.setAttribute(name, value)
  })
}

export const debounce = function (callBack: Function, wait: number) {
  let timeOutId: number

  return (...args: []) => {
    if (timeOutId) {
      clearTimeout(timeOutId)
    }

    timeOutId = window.setTimeout(() => callBack(...args), wait)
  }
}

export const request = async function (url: string) {
  const result = await fetch(url)
  return await result.json()
}

export const getElement = function (elementId: string): HTMLElement {
  const element = document.getElementById(elementId)
  return element
}

export const toggleClassList = function (target: HTMLElement) {
  const element = target

  return function (action: HtmlClassListActions, className: string) {
    if (action === HtmlClassListActions.remove) {
      return element.classList.remove(className)
    }

    return element.classList.add(className)
  }
}

export const createElement = function <K extends keyof HTMLElementTagNameMap>(
  type: K,
  text: string,
  className: string,
  attrs: [IAttribute],
): HTMLElementTagNameMap[K] {
  const element = document.createElement(type)
  toggleClassList(element)(HtmlClassListActions.add, className)
  setAttribute(element, attrs)

  if (text) {
    element.insertAdjacentText('beforeend', text)

    return element
  }

  return element
}

export const addEvtListener = function (
  target: HTMLElement,
  type: string,
  callBack: Function,
) {
  const debounced = debounce(callBack, 1000)

  target?.addEventListener(type, (event) =>
    // @ts-ignore
    debounced(type === 'keydown' ? event : event?.target.value),
  )
}
