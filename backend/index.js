const express = require('express'),
      logger = require('morgan'),
      cors = require('cors');

const db = require('./models');

var app = express();

app.use(logger('dev'));
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    name: 'Charityworks LLC',
    version: '0.0.1'
  });
});

app.get('/users', (req, res) => {
  db.User.findOne({
    where: {
      username: req.query.username
    }
  }).then((user) => {
    res.json({
      user: user
    });
  });
});

app.get('/charities', (req, res) => {
  db.Charity.findAll().then((charities) => {
    res.json({ charities: charities });
  });
});


db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Web server is running on port 3000');
  });
});
