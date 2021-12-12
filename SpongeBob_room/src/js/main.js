import { stateRoomItems } from './utils/const.js';
import { render } from './utils/utils.js';
import ActiveTabs from './abstract/ActiveTabs.js';

class Game {
  constructor() {
    this.game     = document.querySelector('.game')
    this.btnPanel = document.querySelector('.button-panel')
    
    this.rowItemWallpaper = document.querySelector('.row-items-wallpaper')
    this.rowItemBad       = document.querySelector('.row-items-bed')
    
    this.btnWallpaper = document.querySelector('.button-wallpaper')
    this.btnBad       = document.querySelector('.button-bad')
  }
  
  init() {
    this._addedHandlers()
    this.game.addEventListener('state-room', this.finalGame)
  }
  
  finalGame(event) {
    const state = event.detail.state
    
    if (state.bed.check && state.wallpaper.check) {
      console.log('WIN')
    }
  }
  
  _btnWallpaperHandler = () => {
    if (stateRoomItems.wallpaper.check) {
      this.btnWallpaper.disabled = true
    }
    
    this.rowItemWallpaper.classList.toggle('visually-hidden')
    this.btnBad.classList.toggle('visually-hidden')
  }
  
  _btnBedHandler = () => {
    if (stateRoomItems.bed.check) {
      this.btnBad.disabled = true
    }
    
    this.rowItemBad.classList.toggle('visually-hidden')
    this.btnWallpaper.classList.toggle('visually-hidden')
  }
  
  _addedHandlers = () => {
    this.btnWallpaper.addEventListener('click', this._btnWallpaperHandler)
    this.btnBad.addEventListener('click', this._btnBedHandler)
  }
}

new Game().init()
new ActiveTabs('.row-items-bed .button-items', '.bed').init()
new ActiveTabs('.row-items-wallpaper .button-items', '.wallpaper').init()