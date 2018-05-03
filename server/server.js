const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

const shoeRouter = require('./routes/shoes.route');

app.use(bodyParser.json());

app.use(express.static('server/public'));

app.use('/shoes', shoeRouter);

app.listen(PORT, () => {
    console.log(`Up and Running on port ${PORT}`);
});

