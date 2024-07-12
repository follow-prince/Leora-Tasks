const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes");
require("dotenv").config();

const app = express();




app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({limit: '25mb', extended: true}));


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})

app.use("/api", userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something issue");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
