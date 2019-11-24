import { MongoClient} from 'mongodb';

export class DbClient {
    uri = "mongodb+srv://user:Z3DFTdw8CUEarXkw@cluster0-vdmwi.mongodb.net/test?retryWrites=true&w=majority";
    client: MongoClient;
    DbName="csciCloud";
    collec="proxyDB";
    myDB:any;
    
   
    async connect() { // add async
        console.log('connecting to mongo');
    
        try {
          if (!this.client) { // I added this extra check
            
            this.client = await MongoClient.connect(this.uri, { useNewUrlParser: true })
            
            this.myDB = this.client.db(this.DbName).collection(this.collec)  
            console.log(this.myDB.find({}))   
          }
        } catch(error) {
          console.log('error during connecting to mongo: ');
          
        }    
    }




}



// var MongoClient = require("mongodb").MongoClient;
// const uri = "mongodb+srv://user:Z3DFTdw8CUEarXkw@cluster0-vdmwi.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// proxyDB = null
// client.connect(err => {
//   this.proxyDB =client.db("csciCloud").collection("proxyDB");
  
//       // perform actions on the collection object
//       console.log(this.proxyDB.find({}))
//     });
