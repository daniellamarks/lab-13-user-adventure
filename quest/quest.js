import quests from '../data.js';
import { updateUserData } from '../local-storage-utils.js';
import { findById } from '../utils.js';
import { renderHeader } from '../render-utils.js';

renderHeader();

const section = document.querySelector('section');
const body = document.querySelector('body')
const parameters = new URLSearchParams(window.location.search);

const questId = parameters.get('id');

const matchingQuestObject = findById(quests, questId);

const h2 = document.createElement('h2');
h2.textContent = matchingQuestObject.description;

body.style.backgroundImage = `url(../assets/1${matchingQuestObject.image})`;

const form = document.createElement('form');

for (let choice of matchingQuestObject.choices) {
    const label = document.createElement('label');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'possibleSelection';
    radio.value = choice.id;
    // const img = document.createElement('img');
    // img.src = '../assets/kayak1.jpg';
    // img.width = '100%';
    label.append(choice.description, radio);
    
    form.append(label);
}

const button = document.createElement('button');
button.textContent = "I've made my choice";

form.append(button);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const selectedOptionId = formData.get('possibleSelection');

    const matchingChoice = findById(matchingQuestObject.choices, selectedOptionId);
    updateUserData(matchingQuestObject.id, matchingChoice);

        // update UI
    const sectionResult = document.createElement('section')
    sectionResult.id = 'result'
    sectionResult.classList.add('hidden')
    const pResult = document.createElement('p')
    pResult.id = 'result-description'
    const aMap = document.createElement('a')
    aMap.href = "../map"
    aMap.textContent = 'Back to Quests'

    form.classList.add('hidden');
    sectionResult.classList.remove('hidden');
    pResult.textContent = matchingChoice.result;
    
    section.append(pResult, aMap)
         
});

section.append(h2, form);

