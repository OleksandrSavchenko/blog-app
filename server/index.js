import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('CONNECTED!')
});

app.listen(5000, () => console.log('Running on localhost:5000'));