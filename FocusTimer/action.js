import state from './state.js'
import * as timer from'./timer.js'
import * as el from './elements.js'
import { buttonsCards, increaseTime } from './events.js'
import { decreaseTimer } from './events.js'
import * as sounds from './sounds.js'


let currentSound = null

export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countDown()
  
}

export function plusMinutes(){
el.minutes.setAttribute('', true)
el.minutes.focus()
}

export function minusMinutes(){
el.minutes.setAttribute('', true)
el.minutes.focus()
}

export function toggleMusicTree(){
state.isMute = document.documentElement.classList.toggle('music-on')

if(currentSound){
  currentSound.pause()
}

currentSound = sounds.buttonTreeAudio
currentSound.play();
}

export function toggleMusicRain(){
state.isMute = document.documentElement.classList.toggle('music-on')

if (currentSound) {
  currentSound.pause();
}

currentSound = sounds.buttonRainAudio
currentSound.play();
}

export function toggleMusicCoffe(){
state.isMute = document.documentElement.classList.toggle('music-on')
if (currentSound) {
  currentSound.pause();
}


currentSound = sounds.buttonCoffeAudio
currentSound.play();
}


export function toggleMusicFire(){
state.isMute = document.documentElement.classList.toggle('music-on')

if (currentSound) {
  currentSound.pause();
}

currentSound = sounds.buttonFireAudio
currentSound.play();
}

