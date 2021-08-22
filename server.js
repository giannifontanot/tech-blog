const root = require('app-root-path')
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./controllers/index');
const sequelize = require('./config/connection');

app.use(express.json());
app.use(express.static(root + path.sep + 'public'));
app.use(express.urlencoded({extended: true}));
app.use(router);

const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const run = async () => {
    const sequelizeResult = await sequelize.sync({force: true});
    console.log("---> sequelizeResult :" + (sequelizeResult));
    await app.listen(PORT, () => {
        console.log('Server listening on port %j', PORT);
    });
}


//RUN FOREST, RUN!!
run();