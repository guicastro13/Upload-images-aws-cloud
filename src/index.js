require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')

const app = express();


/* DATA BASE SETUP */

mongoose
  .connect(process.env.MONGOO_URI)
  .then(() => console.log("Conectado com MONGODB!"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(morgan('dev'))

app.use(require('./routes'));

app.listen(3000);