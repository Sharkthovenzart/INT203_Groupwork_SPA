var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Connect MongoDB Atlas
var mongo_uri = "mongodb+srv://admin:toor@int203-crud.nkbhj.mongodb.net/INT203-CRUD?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useNewUrlParser: true }).then(
  () => {
    console.log("[Success] Task 2 : Connected to the database ");
  },
  error => {
    console.log("[Failed] Task 2 " + error);
    process.exit();
  }
);

// Create Express for making Path
var app = express();

// Enable to use URI
app.use(cors());

// Convert JSON so it can send between atlas
app.use(express.urlencoded({
   extended: true 
}));
app.use(express.json());

// Create server port
var port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("[Success] Task 1 : Listening on port " + port);
});

// Message for Homepage for express (localhost:5000/)
app.get("/", (req, res) => {
  res.status(200).send("Homepage of Express API");
});

// Path for my MongoDB
var Course = require("./courserouter");
app.use("/api/course", Course);

// Message when entering wrong path (localhost:5000/asdfghjkl;)
app.use((req, res, next) => {
  var err = new Error("Your path is not found");
  err.status = 404;
  next(err);
});