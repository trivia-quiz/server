const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const router = require('./routes/index')

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(port, () => {
    console.log(`Listen to http:localhost:${port}`);
})