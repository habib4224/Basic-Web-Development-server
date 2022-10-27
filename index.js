const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


const categories = require('./Database/datas.json');
const { request } = require('express');


app.use(cors());

app.get('/', (req, res) => {
    res.send('Running')
});

app.get('/course-cat', (req, res) => {
    res.send(categories)
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = categories.find(categori => categori.id == id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log('server running', port);
})




