// IMPORT MODULES under test here:
import { findById } from '../utils.js';

const test = QUnit.test;

test('should find the id within the array output whole object with that id', (expect) => {

    const array = [
        { id: 'monsters',
            title: 'A den of Monsters',
            image: 'monsters.jpg',
        },
        { id: 'dragon',
            title: 'A scary dragon',
            image: 'dragon.jpg',
        }

    ];
    
    const expected = { id: 'monsters', title: 'A den of Monsters', image: 'monsters.jpg' };

    const actual = findById(array, 'monsters');

    expect.deepEqual(actual, expected);
});

