const USER = 'USER';

export function getUserData() {
    const user = localStorage.getItem(USER);
    // const userObject = JSON.parse(user);

    if (!user) return {};

    return JSON.parse(user);
}
//returns an object

export function setUserData(user) {
    const stringyUser = JSON.stringify(user);
    
    localStorage.setItem(USER, stringyUser);
}
//puts into storage as string

export function updateUserData(questId, choice){

    const user = getUserData();

    user.hp += choice.hp;
    user.gold += choice.gold;

    user.completed[questId] = true;

    setUserData(user);
}
//put into storage as stringified object