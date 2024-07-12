const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes");
require("dotenv").config();

const app = express();




app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({limit: '25mb', extended: true}));


app.use("/api", userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something issue");
});

app.all('*', (req, res) => res.status(404).json(new ErrorResponseObject('route not defined')));

module.exports = app;