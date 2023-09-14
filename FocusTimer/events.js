import { controls } from "./elements.js"
import { cards } from "./elements.js"
import * as actions from './action.js'
import * as el from './elements.js'
import { increaseButton } from "./elements.js"
import { decreaseButton } from "./elements.js"
import { buttonTree } from "./elements.js"



let currentTime = 0;


export function buttonsCards(){
  buttonTree.addEventListener('click', ()=>{
  buttonTree.classList.remove ('secondary')
})
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

