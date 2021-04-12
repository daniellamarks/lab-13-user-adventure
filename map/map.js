import quests from '../data.js';
import { renderHeader } from '../render-utils.js';
import { getUserData, questsCompleted } from '../local-storage-utils.js';
// import { getUserData, areAllQuestsCompleted } from '../local-storage-utils.js'

const section = document.querySelector('section');

renderHeader();

for (let quest of quests) {

    const user = getUserData(); 
    const anchorTag = document.createElement('a');
    const div = document.createElement('div');

    anchorTag.textContent = quest.title;
    console.log(quest.id)
    anchorTag.href = `../quest/?id=${quest.id}`;

    div.style.backgroundImage = `url(../assets/${quest.image})`;

    div.classList.add(`${quest.id}`)
    div.append(anchorTag);
    section.append(div);    

    if (user.completed[quest.id]) {
        div.classList.add('opaque');
    }
    
}

const user = getUserData();
const userIsDead = user.hp <= 0;


if (userIsDead || questsCompleted()) {
    window.location = '../results';
}



