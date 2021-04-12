const desert = {
    id: 'desert',
    title: 'Desert Trek',

    image: 'desert.jpg',
    description: `
        How will you find water?`
    ,
    choices: [{
        id: 'walk',
        description: 'walk straight',
        result: `
            You find an oasis!
        `,
        hp: 50,
        grit: 35
    }, {
        id: 'lie',
        description: 'lie down and wait for rain',
        result: `
           No rains come.  
        `,
        hp: -50,
        grit: 50
    }, {
        id: 'drink',
        description: 'drink the cactus juice',
        result: ` You are no longer yourself. 
            
        `,
        hp: 10,
        grit: 0
    }]
};

const ocean = {
    id: 'ocean',
    title: 'Open Waters',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'ocean.jpg',

    description: `
        How will you get to land?
    `,
    choices: [{
        id: 'kayak',
        description: 'Paddling with a kayak',
        result: `
           There is a net in the boat and you catch fish for months before another boat finds you. 
        `,
        hp: 15,
        grit: 15
    }, {
        id: 'swim',
        description: 'Swim!',
        result: `
            You don't get far. 
        `,
        hp: -25,
        grit: 0
    }, {
        id: 'motorboat',
        description: 'Take the motorboat',
        result: `
            You get pretty far but not far enough. 
        `,
        hp: 0,
        grit: 90
    }]
};

const mountain = {
    id: 'mountain',
    title: 'Reach the top',
    image: 'mountain.jpg',

    description: `
        How will you get up the mountain?
    `,
    choices: [{
        id: 'climb',
        description: 'Climb with gear',
        result: 'Good plan. You get to the top. ',
        hp: 100,
        grit: 40
    }, {
        id: 'hike',
        description: 'Try to hike',
        result: `It's too steep, you cannot hike straight up and end up taking the long way.`,
        hp: 10,
        grit: 0
    }, {
        id: 'bike',
        description: 'Mountain bike?',
        result: 'Terrible idea. You fall off the mountain.',
        hp: -20,
        grit: 0
    }]
};

const quests = [
    desert, 
    ocean,
    mountain,
];

export default quests;