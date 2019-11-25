var MongoClient = require('mongodb').MongoClient;



var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    exports.moule= proCollection = db.db('proxyDB').collection('servers')
    
    proCollection.findOne({"server":"one"}, function(err, result){
        if(err) throw err;
        console.log(result)
        
    })
    


    db.close()
})

