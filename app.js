const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('Hello Andrey!'));
=======
app.get('/', (req, res) => res.send('Hello World Andrey!'));
>>>>>>> 1c3ead24713e303a93c7ada4015de8991afcfb81

app.listen(port);
console.log(`App running on http://localhost:${port}`);
