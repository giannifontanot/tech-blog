const path = require('path');
const root = require('app-root-path')
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers/index');
const sequelize = require('./config/connection');
const seedAll = require('./seeds/seed-database');

const app = express();
const PORT = process.env.PORT || 3000;


const configSession = {
    secret: 'this is a secret',
    cookie: {path:'/', maxAge: 86400,},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({db: sequelize}),
};

app.use(session(configSession));
const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(root + path.sep + 'public'));
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


