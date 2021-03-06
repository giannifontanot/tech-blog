const path = require('path');
const root = require('app-root-path')
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers/index');
const sequelize = require('./config/connection');
const seedAll = require('./seeds/seed-database');
const MemoryStore = require('memorystore')(session)
const helpers = request = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3000;


const configSession = {
    secret: 'this is a secret',
    cookie: {path: '/', maxAge: 86400000,},
    resave: false,
    saveUninitialized: true,
    //store: new SequelizeStore({db: sequelize}),
    store: new MemoryStore({checkPeriod: 86400000}),
};

app.use(session(configSession));
const hbs = exphbs.create({helpers});

app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/public', express.static('public'));

app.use(routes);


const run = async () => {
    await sequelize.sync({force: true});
    await seedAll.seedAll();
    await app.listen(PORT, () => {
        console.log('Server listening on port %j', PORT);
    });
}


//RUN FOREST, RUN!!
run();


