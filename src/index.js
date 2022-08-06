require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const path = require('path')

const app = express();


/* DATA BASE SETUP */

mongoose
  .connect(process.env.MONGOO_URI)
  .then(() => console.log("Conectado com MONGODB!"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(morgan('dev'));
app.use('/files', express.static(path.resolve(__dirname,'..','tmp','uploads')))

app.use(require('./routes'));

app.listen(3000);