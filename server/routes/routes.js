const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://username:p@LMTREE33@nytarchive.6rpem.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
const express = require ('express');

const router = express.Router();

//GET HOMEPAGE
router.get('/', async function(req, res, next) {
	const data = await loadDatabase();
	res.send(await data.find({}).toArray());
});


async function loadDatabase() {
	const client = await MongoClient.connect(uri, {useNewUrlParser : true, useUnifiedTopology: true});

return client.db("nyt_database").collection("2000");

}









module.exports = router;
