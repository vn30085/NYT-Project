const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://username:p@LMTREE33@nytarchive.6rpem.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
const express = require ('express');

const router = express.Router();

//GET HOMEPAGE
router.get('/', async function(req, res, next) {
    res.send("this is the root page");
});

//GET DATA FROM YEAR
router.get('/:year', async function(req, res, next) {
    const data = await loadDatabase();
   
	res.json(await data.collection(req.params.year).find({}).toArray());
});


async function loadDatabase() {
	const client = await MongoClient.connect(uri, {useNewUrlParser : true, useUnifiedTopology: true});

return client.db("nyt_database");

}

module.exports = router;
