const MongoClient = require('mongodb').MongoClient
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

async function main() {
    const uri = "mongodb+srv://username:p@LMTREE33@nytarchive.6rpem.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
 
    try {
        await client.connect();
        await insertIntoMongo(client);
    } catch (e) {
        console.error(e);
    } finally {
        //client.close();
        console.log("connection closed");
    }
}

async function insertIntoMongo(client){
    var dbo = client.db("nyt_database");

    for (var j = 10; j < 13; j++) {
        var string = 'https://api.nytimes.com/svc/archive/v1/2020/' + j.toString() + '.json?api-key=r5iHW94vfaAB32DcxrEeslnAjmM2KGA0';
        console.log("Year: 2001 " + "Month: " + j.toString());
            
        retrieveData(dbo, string);
            
    }
}


function retrieveData(dbo, string) {
    let request = new XMLHttpRequest();
    request.open('GET', string , true);
    let filteredData = [];
    let noDuplicates = [];
    let duplicateData = [];

    request.onload = function() {
        let data = JSON.parse(this.responseText);
        data = data.response.docs;

        for (var i = 0; i < data.length; i++) {
            if (data[i].print_page == 1 && data[i].print_section == 'A') {
                filteredData.push(data[i]);
            }        
        }

        for (var j = 0; j < filteredData.length; j++) {
            if (!duplicateData.includes(filteredData[j].headline.main)) {
                noDuplicates.push(filteredData[j]);
            }

            duplicateData.push(filteredData[j].headline.main);
        }


        dbo.collection("archive").insertMany(noDuplicates, {ordered: false}, function(err, res) {
            console.log("got here");
            if (err) {
                throw err;
            }
            console.log("Number of docs inserted: " + res.insertedCount);
        });
        

    }

    request.send();

}

main().catch(console.error);
