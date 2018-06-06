const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const path = require('path');

const app = express();
// app.use(bodyParser.json);
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
    // res.sendfile(path.resolve('${__dirname/../React/dist/index.html'));
    res.sendFile(index.html);
});

app.listen(port, () => {
    console.log(`listening on port ${port}!`);
});