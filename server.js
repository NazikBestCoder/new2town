// dependencies, import express-handlebars
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
// for pictures
// var mustacheExpress = require('mustache-express');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// sets up Express app
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
// first 2 lines set handlebars.js as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
// picture middleware
// app.engine('html', mustacheExpress());
// app.set('view engine', 'mustache');
// app.use('/public', express.static('public'));
app.use(routes);
// starts the server to begin listening
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
