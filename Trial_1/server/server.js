const express = require('express');
const app = express();
const PORT = 8008;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});