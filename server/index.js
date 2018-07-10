const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static(`${__dirname}/../build`));

app.get('/', (req, res) => res.sendFile(`${__dirname}/../build/index.html`));

let port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(
    `Jerryd's Albion Crafting Calculator server online at port: ${port}`
  )
);
