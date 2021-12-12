import {stateRoomItems} from '../utils/const.js';

export default class ActiveTabs {
  constructor(tabSelector, contentSelector) {
    this.game = document.querySelector('.game')
    this.tabItems = Array.from(document.querySelectorAll(tabSelector))
    this.contentItems = Array.from(document.querySelectorAll(contentSelector))
  }
  
  _clearActiveClass = (element, className = 'is-active') => {
    element.find(item => item.classList.remove(`${ className }`))
  }
  
  _setActiveClass = (element, index, className = 'is-active') => {
    element[index].classList.add(`${ className }`)
  }
  
  _checkoutTabs = (btn, index) => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('is-active')) return
      this._getCheckedStatus(btn, index)
      
      this._clearActiveClass(this.tabItems)
      this._clearActiveClass(this.contentItems)
      
      this._setActiveClass(this.tabItems, index)
      this._setActiveClass(this.contentItems, index)
    })
  }
  
  _getCheckedStatus = (btn, index) => {
    switch (btn.dataset.type) {
      case 'wallpaper':
        stateRoomItems.wallpaper.check = true
        stateRoomItems.wallpaper.indexItem = index
        break
      case 'bed':
        stateRoomItems.bed.check = true
        stateRoomItems.bed.indexItem = index
        break
    }  
    
    this.checkStatusOnFinalGame()
  }
  
  checkStatusOnFinalGame = () => {
    this.game.dispatchEvent(new CustomEvent('state-room', {
      bubbles: true,
      detail: {
        state: stateRoomItems
      }
    }))
  }
  
  init = () => {
    this.tabItems.forEach(this._checkoutTabs)
  }
}