require("dotenv").config();

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(process.env.WEATHER_API_KEY);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
