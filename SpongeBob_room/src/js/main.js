import { stateRoomItems } from './utils/const.js';
import { render } from './utils/utils.js';
import ActiveTabs from './abstract/ActiveTabs.js';
import SpongeBob from './view/SpongeBob.js'

class Game {
  constructor() {
    this.game     = document.querySelector('.game')
    this.winMessage = document.querySelector('.win-message')
    
    this.rowItemWallpaper = document.querySelector('.row-items-wallpaper')
    this.rowItemBad       = document.querySelector('.row-items-bed')
    
    this.btnWallpaper = document.querySelector('.button-wallpaper')
    this.btnBed       = document.querySelector('.button-bad')
    this._allDisabled = false
    this._isWinGame = false
    
    this.spongeBob = new SpongeBob()
  }
  
  init = () => {
    this._addedHandlers()
  }
  
  runFinalScene = () => {
    console.warn('FINISH GAME')
    if (this._allDisabled && this._isWinGame) {
      this.winMessage.classList.remove('visually-hidden')
    }
  }
  
  // проверка, что все кнопки закрылись
  _checkDisableAllBtns = () => {
    if (this.btnWallpaper.disabled && this.btnBed.disabled) {
      this._allDisabled = true
      console.warn('все кнопки задизаблены!')
      this.runFinalScene()
    }
  }
  
  // проверка, что все предметы выбраны
  _checkedEnterAllItems = (event) => {
    const state = event.detail.state
    
    this.spongeBob.changeEmotions(state)
  
    if (state.bed.check && state.wallpaper.check) {
      this._isWinGame = true
      console.warn('все предметы выбраны!')
      this.runFinalScene()
    }
  }
  
  _addedHandlers = () => {
    this.btnWallpaper.addEventListener('click', this._btnWallpaperHandler)
    this.btnBed.addEventListener('click', this._btnBedHandler)
    this.game.addEventListener('state-room', this._checkedEnterAllItems)
  }
  
  // обработчик main btn [1]
  _btnWallpaperHandler = () => {
    if (stateRoomItems.wallpaper.check) {
      this.btnWallpaper.disabled = true
    }
    
    this.rowItemWallpaper.classList.toggle('visually-hidden')
    this.btnBed.classList.toggle('visually-hidden')
    this._checkDisableAllBtns()
  }
  
  // обработчик main btn [1]
  _btnBedHandler = () => {
    if (stateRoomItems.bed.check) {
      this.btnBed.disabled = true
    }
    
    this.rowItemBad.classList.toggle('visually-hidden')
    this.btnWallpaper.classList.toggle('visually-hidden')
    this._checkDisableAllBtns()
  }
}

new Game().init()
new ActiveTabs('.row-items-bed .button-items', '.bed').init()
new ActiveTabs('.row-items-wallpaper .button-items', '.wallpaper').init()

