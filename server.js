const express = require('express');
const app = express();
const port = 1996;
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

//API
const api = require('./routes/api');
app.use('/api',api);



app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
})