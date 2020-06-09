const express = require('./01-getting-started/node_modules/express');
const app = express();
const port = 9000;


app.get('/', (req, res) => res.send("hehhehhehe"));
app.listen(port, () => console.log("App listenning on port" + port));