const express = require('express');
const cors = require('cors');
const app = express();

const data = require('./routes/api/data');
app.use('/api/data', data);

const port = process.env.PORT || 5000;


//Middleware
app.use(cors());


if(process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public/'));
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}


app.listen(port, () => console.log('Server Started on port ' + port));
