import { setUserData } from './local-storage-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const userName = data.get('name');
    const userChoice = data.get('moveAvatar');
    const user = {
        hp: 35,
        grit: 0,
        name: userName,
        image: `../assets/${userChoice}.png`, 
        completed: {}
    };

    setUserData(user);

    window.location = './map';

});


