const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//Estou falando para o express converter o json para javascript
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

