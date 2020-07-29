//server side
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Starting up server...'));
app.use(express.static('public'));
