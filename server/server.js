const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3030;

const customMiddlware = (request, response, next) => {
    console.log('====> Request was received');

    request.myCustomData = {a: 3};

    next();
};

app.use(cors());
app.use(bodyParser.json());

app.get('/', customMiddlware, (request, response, next) => {
    response.status(200).send('Hello world');
});

app.get('/users', (request, response, next) => {
    console.log('====> Request was received');

    response.status(200).send({ users: ['user1', 'user2', 'user3'] });
});

app.post('/users', (request, response, next) => {;
    console.log(request.body);

    response.status(200).send(['user1', 'user2', 'user3']);
});

// app.post('/users/:id', (request, response, next) => {
//     console.log('====>A POST request was received');
//     console.log(request.params);

//     response.status(200).send(['user1', 'user2', 'user3']);
// });

app.listen(PORT, () => {
    console.log('=======================================');
    console.log(`|| Server is running under ${PORT} port ||`);
    console.log('=======================================');
});