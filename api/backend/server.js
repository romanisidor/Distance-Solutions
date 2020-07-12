'use strict'
const cors = require('cors');
const authRoutes = require('./auth/auth.routes');
const express = require('express');
const propierties = require('./config/properties');
const DB = require('./config/db');
// init DB
DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// app.express.json();
app.use(cors());

app.use('/api', router);

authRoutes(router);
router.get('/', (req, res) => {
  res.send('API FUNCIONA :)');
});
app.use(router);

 app.listen(propierties.PORT,'192.168.8.128' || 'localhost',function() {
   console.log(`Server runing on port ${propierties.PORT}`);
 }
);
//app.listen(propierties.PORT, () => console.log(`Server runing on port ${propierties.PORT}`));