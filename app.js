import { setUserData } from './local-storage-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const userName = data.get('name');
    const userClass = data.get('class');
    

    const user = {
        hp: 35,
        gold: 0,
        name: userName,
        class: userClass,
        completed: {}
    };

    setUserData(user);

    window.location = './map';

});


// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM