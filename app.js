const express = require('express'); 
const mysql = require('mysql2');
const app = express();
exports.app = app;
const port = 3000;
const sequelize = require('./src/models/db/sequelize.js')
const bodyParser = require('body-parser');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World, express 1');
});



sequelize.initDb();


require('./src/models/routes/routes-animal')(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


 