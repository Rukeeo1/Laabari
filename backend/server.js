// import express from express;
// import path from path;
// import mongoose from 'mongoose';
// import logger from 'morgan';
// import cookieParser from 'cookie-parser';
// import bodyParser from 'body-parse'
// import cors from 'cors'
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

mongoose
  .connect('mongodb://localhost/labaari')
  .then(() => {
    console.log('Connected to labarri');
  })
  .catch(err => {
    console.log(err);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log('Server running on Port ' + 3001);
});
