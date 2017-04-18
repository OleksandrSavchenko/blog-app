import express from 'express';
import bodyParser from 'body-parser';

import users from './routes/users';

const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, OPTIONS, GET, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

app.use(bodyParser.json());

app.use('/api/users', users);

app.get('/', (req, res) => {
    res.send('CONNECTED!')
});

app.listen(5000, () => console.log('Running on localhost:5000'));