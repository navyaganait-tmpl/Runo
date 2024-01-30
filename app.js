// const cors = require("cors");
const express = require("express");
require("dotenv").config();
const app = express();
const configs = require("./config/routes");
// const nodeMailer=require('nodemailer');
const bodyParser = require("body-parser");
// app.use(bodyParser.json());
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./database/models");
PORT = process.env.PORT || 8080;
app.use(express.json());
console.log("in app");


const cors = require("cors")
app.use(cors())
app.use((req, res, next)=> {
res.header("Acess-Control-Allow-Origin", "*");
res.header("Acess-Control-Allow-Methods",
"GET, HEAD, OPTIONS, POST, PUT, DELETE"
);
res.header("Acess-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept, Authorization"
);
next()
})

configs(app);
app.listen(PORT, async () => {
  try {
    // console.log(db);
    await db.sequelize.authenticate();
    await db.sequelize.sync();
    console.log("Connection has been established successfully.");
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});