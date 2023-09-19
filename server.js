const express = require('express');
const Pizza = require('./models/pizzaModel');
const db = require('./db');

const app = express();
app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')




app.get("/", (req, res) => {
  res.send("Server working");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
