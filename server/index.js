const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const path = require('path');


const app = express();
app.use(bodyParser.json);
app.use(express.static('${__dirname}/../react-client/dist'));

app.get('*', (req, res) => {
    // res.sendfile(path.resolve('${__dirname/../React/dist/index.html'));
    res.sendFile(path.resolve('${__direname}/../react-client/dist/indext.html'))
});

app.listen(port, () => {
    console.log('listening on port ${PORT}!');
});