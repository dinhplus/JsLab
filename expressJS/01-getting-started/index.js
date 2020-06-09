const express = require('express');
const app = express();
const port = 9000;


app.get('/', (req, res) => res.send("hehhehhehe"));
app.listen(port, () => console.log("App listenning on port" + port));