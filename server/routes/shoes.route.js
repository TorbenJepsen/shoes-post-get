const express = require('express');
const router = express.Router();

const shoeCollection = [
    {
        name: 'Red Wing',
        cost: 250
    },
    {
        name: 'Puma Soliel V2',
        cost: 40
    },
    { 
        name: 'Space Boots', 
        cost: 10
    },
    { 
        name: 'Adidas Superstar',
        cost: 192
    },
    { 
        name: 'Jordan XII',
        cost: 178
    },
    { 
        name: 'Converse Chuck Taylor low',
        cost: 32
    },
    {   
        name:'Nike Roshe Run',
        cost: 127
    },
    { 
        name: 'Nike Huarache', 
        cost: 148
    }
];

router.get('/', (req, res) => {
    res.send(shoeCollection);
});

router.post('/', (req, res) => {
    console.log(req.body);
    shoeCollection.push(req.body);
    res.sendStatus(201);
});

module.exports = router;