// var express = require("express");
// var path = require("path");
// var bodyParser = require("body-parser");
// var mongo = require("mongoose");

// var db = mongo.connect("mongodb://localhost:27017/AngularCRUD", function(
//   err,
//   response
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Connected to" + db, +" + ", response);
//   }
// });

// var app = express();
// app.use(bodyParser());
// app.use(bodyParser.json({ limit: "5mb" }));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(function(req, res, next) {
//   res.setHeader("Access-Contorl-Allow-Origin", "http://localhost/4200");
//   res.setHeader(
//     "Access-Contorl-Allow-Methods",
//     "GET,POST,OPTIONS,PUT,PATCH,DELETE"
//   );
//   res.setHeader("Access-Contorl-Allow-Header", "X-Requested-With,conten-type");
//   res.setHeader("Access-Contorl-Allow-Credentials", true);
// });

// var Schema = mongo.Schema;

// var UserSchema = new Schema(
//   {
//     servername: { type: string },
//     time: { type: TimeStamp },
//     frequency: { type: Int32 }
//   },
//   { versionKey: false }
// );

// var model = mongo.model("users", UserSchema, "users");

// app.post("/api/SaveProxy", function(req, res) {
//   var mod = new model(req.body);
//   if (req.body.mode == "Save") {
//     mod.save(function(err, data) {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send({ data: "Record has been Inserted..!!" });
//       }
//     });
//   } else {
//     model.findByIdAndUpdate(
//       req.body.id,
//       {
//         servername: req.body.servername,
//         time: req.body.time,
//         frequency: req.body.frequency
//       },
//       function(err, date) {
//         if (err) {
//           res.send(err);
//         } else {
//           res.send({ data: "Record has beed Updated..!!" });
//         }
//       }
//     );
//   }
// });

// app.get("/api/getProxy", function(req, res) {
//   model.find({}, function(err, data) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(data);
//     }
//   });
// });

// app.listen(8080, function() {
//   console.log("The proxy is working");
// });

var MongoClient = require("mongodb").MongoClient;
var url =
  //"mongodb://capstone:mongopassword@cluster0-shard-00-00-we2hu.mongodb.net:27017,cluster0-shard-00-01-we2hu.mongodb.net:27017,cluster0-shard-00-02-we2hu.mongodb.net:27017/client_example?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
  "mongodb+srv://dbUser:dbUserPassword@twiter-pyyhe.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("csciCloud");
  dbo
    .collection("proxyDB")
    .find({})
    .toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});

// dbUser
// dbUserpassword

//csciCloud.proxyDB
// var dbo = db.db("hunter_collab");
// var user = dbo.collection("users").findOne({});
// console.log(user);

//Z3DFTdw8CUEarXkw
//mongodb+srv://user:Z3DFTdw8CUEarXkw@cluster0-vdmwi.mongodb.net/test?retryWrites=true&w=majority
