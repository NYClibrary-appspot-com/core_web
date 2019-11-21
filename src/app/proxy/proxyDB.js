var MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://user:Z3DFTdw8CUEarXkw@cluster0-vdmwi.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
proxyDB = null
client.connect(err => {
  this.proxyDB =client.db("csciCloud").collection("proxyDB");
  
      // perform actions on the collection object
      console.log(this.proxyDB.find({}))
      client.close();
    });


  module.exports =this.proxyDB