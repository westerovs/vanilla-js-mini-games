import { clearActiveClass } from '../utils/utils.js'
/*
грустное выражение при выборе грязной кровати
нейтральное выражение при выборе массажной кровати
довольное выражение при выборе кроватки спанчБоба
* */

export default class SpongeBob {
  constructor() {
    this.bobImages = Array.from(document.querySelectorAll('.bob'))

    this.bobEmotions = {
      norm: 0,
      sad: 1,
      happy: 2,
    }
  
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
  
  setEmotion = (bobEmotion) => {
    this.bobImages.find((item, index) => {
      if (index === bobEmotion) item.classList.add('is-active')
    })
  }
  
  changeEmotions = (state) => {
    // console.log('выбраны обои: ', state.wallpaper.indexItem)
    // console.log('выбрана кровать: ', state.bed.indexItem)
  
    // обои
    if (state.wallpaper.indexItem === 0) {
      clearActiveClass(this.bobImages, 'is-active')
      this.setEmotion(this.bobEmotions.happy)
    }
    if (state.wallpaper.indexItem >= 1) {
      clearActiveClass(this.bobImages, 'is-active')
      this.setEmotion(this.bobEmotions.sad)
    }
  
    // кровати
    if (state.bed.indexItem === 0) {
      clearActiveClass(this.bobImages, 'is-active')
      this.setEmotion(this.bobEmotions.norm)
    }
    if (state.bed.indexItem === 1) {
      clearActiveClass(this.bobImages, 'is-active')
      this.setEmotion(this.bobEmotions.happy)
    }
    if (state.bed.indexItem === 2) {
      clearActiveClass(this.bobImages, 'is-active')
      this.setEmotion(this.bobEmotions.sad)
    }
  }
  
  init = () => {
    this.setEmotion(this.bobEmotions.norm)
  }
}

new SpongeBob().init()