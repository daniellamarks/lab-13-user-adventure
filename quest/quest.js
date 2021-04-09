import quests from '../data.js';
import { getUserData, updateUserData } from '../local-storage-utils.js';
import { findById } from '../utils.js';

const section = document.querySelector('section');

const parameters = new URLSearchParams(window.location.search);

const questId = parameters.get('id');

const matchingQuestObject = findById(quests, questId);

const h2 = document.createElement('h2');
const img = document.createElement('img');

//put data from object into h2 and img

h2.textContent = matchingQuestObject.title;
img.src = `../assets/${matchingQuestObject.image}`;

const form = document.createElement('form');

for (let choice of matchingQuestObject.choices) {
    const label = document.createElement('label');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'possibleSelection';
    radio.value = choice.id;
    label.append(choice.description, radio);
    
    form.append(label);
}

const button = document.createElement('button');
button.textContent = "I've made my choice";

form.append(button);

button.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const selectedOptionId = formData.get('possibleSelection');

    const matchingChoice = findById(matchingQuestObject.choices, selectedOptionId);

    updateUserData(matchingQuestObject.id, matchingChoice);

    alert(JSON.stringify(getUserData()), true, 2);

    window.location = '../map';

});

section.append(h2, img, form);