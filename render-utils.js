import { getUserData } from './local-storage-utils.js';


export function renderHeader() {
    const header = document.querySelector('header');
    const user = getUserData();
    const div = document.createElement('div');
    div.textContent = `name: ${user.name}, HP: ${user.hp}, grit: ${user.grit}`;
    // div.src = user.image;
    console.log(user.image);
    const avatar = document.createElement('img');
    avatar.id = 'moveAvatar'
    avatar.src = user.image;
    avatar.width = `30`;
    div.append(avatar);
    header.append(div);
}