const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/routes.js');
app.use(cors());

const port = process.env.PORT || 5000;


app.use(routes);


app.listen(port, () => console.log('Server Started on port' + port));
