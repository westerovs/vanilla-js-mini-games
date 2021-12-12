import { clearActiveClass } from '../utils/utils.js'

export default class SpongeBob {
  constructor() {
    this.bobImages = Array.from(document.querySelectorAll('.bob'))
  
    // SpongeBob↓ Wallpaper↓ Bed↓
    // 0: norm
    // 0: sad
    // 2: happy
    this.MatrixEmotions = [
      [0, 0, 0]
    ]
  }
  
  setNormal = () => {
  
  }
  
  setHappy = () => {
  
  }
  
  setSad = () => {
  
  }
  
  changeEmotions = (state) => {
    // console.log('выбраны обои: ', state.wallpaper.indexItem)
    // console.log('выбрана кровать: ', state.bed.indexItem)
    clearActiveClass(this.bobImages, 'is-active')
  
    if (state.wallpaper.indexItem === 0) {
      this.bobImages.find((item, index) => {
        if (index === 0) item.classList.add('is-active')
      })
    }
    
    if (state.wallpaper.indexItem >= 1) {
      this.bobImages.find((item, index) => {
        if (index === 1) item.classList.add('is-active')
      })
    }
  }
  
  init = () => {
    this.bobImages.find((item, index) => {
      if (index === 0) item.classList.add('is-active')
    })
  }
}

new SpongeBob().init()