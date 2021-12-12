const render = (container, template, place = 'beforeend') => {
  if (container instanceof Element) {
    container.insertAdjacentHTML(place, template)
  }
}

const clearActiveClass = (element, className = 'is-active') => {
  element.find(item => item.classList.remove(`${ className }`))
}

const setActiveClass = (element, index, className = 'is-active') => {
  element[index].classList.add(`${ className }`)
}

export {
  render,
  clearActiveClass,
  setActiveClass
}