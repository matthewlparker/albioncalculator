const express = require('express');
const app = express();

app.get('/', (req, res) => res.sendFile(`${__dirname}/../build/index.html`));

let port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(
    `Jerryd's Albion Crafting Calculator server online at port: ${port}`
  )
);
