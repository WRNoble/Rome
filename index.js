const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const emperorsRouter = require("./routes/emperor.routes");
const politicianRouter = require("./routes/politician.routes");
const enemyRouter = require("./routes/enemy.routes");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5003;

//middleware

app.use(cors());
app.use(express.json());
app.use("/emperors", emperorsRouter);
app.use("/politician", politicianRouter);
app.use("/enemy", enemyRouter);

//connect to database

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to Roman Database!");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
