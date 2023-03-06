var data = require('../Backend/data.json');
var express = require('express');
var port = 3000;
var app = express();
app.use(express.json());

// TODO: write a GET endpoint "getChildrenTotal" to retrieve total number of children all the customers have in total

// TODO: write a POST endpoint "getById" to retrieve 1 record by ID

// Sample GET request
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Test app listening on port ${port}`);
});
