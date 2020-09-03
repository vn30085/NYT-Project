const MongoClient = require('mongodb').MongoClient

const uri = "mongodb+srv://username:p@LMTREE33@nytarchive.6rpem.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

async function main() {

        let db = await loadDatabase();
        let data = await db.collection("archive").find({"pub_date" : {$regex : ".*2020.*"}}).toArray();
        

        db.collection("2020").insertMany(data, {ordered: false}, function(err, res) {
            console.log("got here");
            if (err) {
                throw err;
            }
            console.log("Number of docs inserted: " + res.insertedCount);
        });



}


async function loadDatabase() {
    const client = await MongoClient.connect(uri, {useNewUrlParser : true, useUnifiedTopology: true});

    return client.db("nyt_database");

}


main().catch(console.error);