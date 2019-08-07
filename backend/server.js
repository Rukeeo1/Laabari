const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/users');
const morgan = require('morgan');
const schema = require('./schema/schema');
const graphQLHTTP = require('express-graphql');

mongoose
  .connect('mongodb://localhost/labaari', {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('Connected to labarri');
  })
  .catch(err => {
    console.log(err);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'));
app.use('/api/users', userRouter);

const port = process.env.PORT || 3001;

app.use(
  //this is the normal graphql thingy...
  '/graphql',
  graphQLHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port, () => {
  console.log('Server running on Port ' + 3001);
});
