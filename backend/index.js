const express = require("express");
const port = 3000;
const app = express();

app.get("/getTodos", (req, res) => {
	res.send("hi");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
