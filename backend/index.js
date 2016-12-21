const env = process.env.NODE_ENV || 'development',
      config = require('./config/config.js')[env],
      express = require('express'),
      logger = require('morgan'),
      bodyParser = require('body-parser'),
      cors = require('cors');

const db = require('./models');

var app = express();

// config.braintreeAPIPublicKey || config.braintreeAPISecretKey

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser());

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
  if (req.query.slug) {
    return db.Charity.findOne({
      where: {
        slug: req.query.slug
      }
    }).then((charity) => {
      res.json({ charity: charity });
    });
  }

  db.Charity.findAll().then((charities) => {
    res.json({ charities: charities });
  });
});

app.post('/donations', (req, res) => {
  console.log('REQUEST BODY IS:');
  console.log(req.body);
  res.status(500).end();
});



db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Web server is running on port 3000');
  });
});
