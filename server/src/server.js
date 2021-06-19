const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/test', (request, response) => {
    console.log("test");
    return response.json({"test":"test"});
});

app.listen(3333, () => {
    console.log("☁ Back-end started");
});