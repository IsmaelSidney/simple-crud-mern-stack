const express = require('express')

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const bookRoute = require('./routes/books.js');
const mongoose = require('mongoose')


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://book:<password>@cluster0.7wnban0.mongodb.net/?retryWrites=true&w=majority', (event) => {
    console.log("connected to db")
}).catch(e => console.log(e))

app.use('/books', bookRoute);
app.listen(4000);