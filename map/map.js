import quests from '../data.js';

const section = document.querySelector('section');

for (let quest of quests) {
    const anchorTag = document.createElement('a');
    const div = document.createElement('div');

    anchorTag.textContent = quest.title;

    anchorTag.href = `../quest/?id=${quest.id}`;

    div.style.backgroundImage = `url(../assets/${quest.image})`;

    div.append(anchorTag);
    section.append(div);
}

// const imagesArray = [

//     desert.jpg,


// ]



