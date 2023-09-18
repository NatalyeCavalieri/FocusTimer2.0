import { controls } from "./elements.js"
import { cards } from "./elements.js"
import * as actions from './action.js'
import * as el from './elements.js'
import { increaseButton } from "./elements.js"
import { decreaseButton } from "./elements.js"
import { buttonTree } from "./elements.js"
import { buttonCoffe } from "./elements.js"
import { buttonRain } from "./elements.js"
import { buttonFire } from "./elements.js"
import * as sounds from './sounds.js'



let currentTime = 0
let buttonSelected = null
let currentSoundselected= null


export function buttonsCards(){
  buttonTree.addEventListener('click', ()=>{
    buttonTree.classList.toggle ('selectedButton')
    if (buttonSelected !== buttonTree) {
      resetButton(buttonSelected);
      buttonSelected = buttonTree;
      reproduzirSom(sounds.buttonTreeAudio);
    }
})
  buttonCoffe.addEventListener('click', ()=>{
    buttonCoffe.classList.toggle ('selectedButton')
    if (buttonSelected !== buttonCoffe) {
      resetButton(buttonSelected);
      buttonSelected = buttonCoffe;
      reproduzirSom(sounds.buttonCoffeAudio);
    
    }
})
  buttonRain.addEventListener('click', ()=>{
    buttonRain.classList.toggle ('selectedButton')
    if (buttonSelected !== buttonRain) {
      resetButton(buttonSelected);
      buttonSelected = buttonRain;
      reproduzirSom(sounds.buttonRainAudio);
    }
})
  buttonFire.addEventListener('click', ()=>{
    buttonFire.classList.toggle ('selectedButton')
    if (buttonSelected !== buttonFire) {
      resetButton(buttonSelected)
      buttonSelected = buttonFire
      reproduzirSom(sounds.buttonFireAudio)
    } 
})
}


function resetButton(button) {
  if (button) {
    button.classList.remove('selectedButton');
  }
  if (currentSoundselected) {
    currentSoundselected.pause();
    currentSoundselected = null;
  }
}

function reproduzirSom(sound) {
  if (sound) {
    currentSoundselected = sound;
    currentSoundselected.play();
  }
}



export function registerControls(){
controls.addEventListener('click', (event) => {
  const action = event.target.dataset.action
  if(typeof actions[action] != "function"){
  return
}
actions[action]()
})


cards.addEventListener('click', (event) =>{
const action = event.target.dataset.action
if(typeof actions[action] != "function"){
  return
}

actions[action]()
})

increaseButton.addEventListener('click', () =>{
  increaseTime()
})

decreaseButton.addEventListener('click', () => {
  decreaseTimer()
})

}

export function setMinutes(){
  el.minutes.addEventListener('focus', () =>{
  el.minutes.textContent = currentTime
  })
}


export function increaseTime() {
  currentTime += 5
  el.minutes.textContent = String(currentTime).padStart(2, "0")
}

export function decreaseTimer(){
  currentTime -= 5
  el.minutes.textContent = String(currentTime).padStart(2, "0")

}

