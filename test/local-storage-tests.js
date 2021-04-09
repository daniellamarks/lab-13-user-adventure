import { getUserData, setUserData, updateUserData } from '../local-storage-utils.js';

const test = QUnit.test;

test('should GET the user data from local storage', (expect) => {

    const user = {
        hp: 35,
        gold: 0,
        name: 'Daniella',
        class: 'elf',
        completed: {},
    };

    localStorage.setItem('USER', JSON.stringify(user));

    const actual = getUserData();

    expect.deepEqual(actual, user);

});

test('should SET the user data into local storage', (expect) => {

    const user = {
        hp: 35,
        gold: 0,
        name: 'Daniella',
        class: 'elf',
        completed: {},
    };

    setUserData(user);

    const actual = JSON.parse(localStorage.getItem('USER'));

    expect.deepEqual(actual, user);

});

test('when the user makes a choice, hp, gold, and completed should change', (expect) => {

    const user = {
        hp: 35,
        gold: 10,
        name: 'Daniella',
        class: 'elf',
        completed: {},
    };

    localStorage.setItem('USER', JSON.stringify(user));

    const choice = {
        hp: 10,
        gold: 25,
    };

    const expected = {
        hp: 45,
        gold: 35,
        name: 'Daniella',
        class: 'elf',
        completed: {
            cave: true
        },
    };

    updateUserData('cave', choice);

    const actual = JSON.parse(localStorage.getItem('USER'));

    expect.deepEqual(actual, expected);

});