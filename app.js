const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const fileupload = require("express-fileupload");

const db = require("./config/database.js");

//test db

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: ", err));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//item routes

app.use("/item", require("./routes/item"));
app.use("/upload", require("./routes/upload"));

app.get("/", function (req, res) {
  res.sendFile("views/test.html", { root: __dirname });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));