import { getUserData } from '../local-storage-utils.js';
import { renderHeader } from '../render-utils.js';
import { aliveGritMessages, deadGritMessages, hpMessages } from './messages.js';

renderHeader();

const user = getUserData();
const body = document.querySelector('body');

const userIsDead = user.hp <= 0;

let gritStatus;

if (user.grit <= 10) {
    gritStatus = 'cowardly';
} else if (user.grit <= 30 && user.grit > 10) {
    gritStatus = 'comfortable';
} else {
    gritStatus = 'brave';
}

let hpStatus;

if (userIsDead) {
    hpStatus = 'dead'; body.style.backgroundImage = `url('../assets/rip.jpg')`;
} else if (user.hp > 0 && user.hp < 40) {
    hpStatus = 'frail'; body.style.backgroundImage = `url('../assets/sleep.jpg')`;
} else {
    hpStatus = 'healthy'; body.style.backgroundImage = `url('../assets/adventure.jpg')`; 
}

const gritMessagesToUse = userIsDead ? deadGritMessages : aliveGritMessages;

const resultSection = document.getElementById('results');

const pResults = document.createElement('p');
pResults.textContent = `${gritMessagesToUse[gritStatus]} ${hpMessages[hpStatus]}`;

resultSection.append(pResults);


const main = document.querySelector('main');
const button = document.createElement('button');
button.classList.add('clear-data');
button.textContent = `Start a new adventure!`;
main.append(button);

button.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../';
});



























