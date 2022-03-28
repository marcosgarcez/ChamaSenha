const express = require('express');
const app = express();
const port = 5000;

app.get('/visualizar', (res, req) => {
    res.sendFile('/public/visualizar/index.html', {root: __dirname});
});

app.listen(port, ()=> {
    console.log(`Now listening on port: ${port}`);
});