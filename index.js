import express from "express";

const app = express();

app.use(express.static('public'));

app.get('/', (_req, res) => {
    res.send('index.html');
})

app.listen(4040, () => {
    console.log('SERVER ON')
})