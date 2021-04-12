import quests from './data.js';
const USER = 'USER';

//returns an object
export function getUserData() {
    const user = localStorage.getItem(USER);
    // const userObject = JSON.parse(user);

    if (!user) return {};

    return JSON.parse(user);
}

//puts into storage as string
export function setUserData(user) {
    const stringyUser = JSON.stringify(user);
    
    localStorage.setItem(USER, stringyUser);
}

//put into storage as stringified object
export function updateUserData(questId, choice){

    const user = getUserData();

    user.hp += choice.hp;
    user.grit += choice.grit;

    user.completed[questId] = true;

    setUserData(user);
}

export function questsCompleted() {
    const user = getUserData();

    for (let quest of quests) {
        if (!user.completed[quest.id]) {
            return false;
        }
    }

    return true;
}