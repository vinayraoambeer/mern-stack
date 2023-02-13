const express = require('express');
const app = express();
const port = process.env.PORT || 5010;

app.get("/", function(req, res){
	// res.send("Hello Iam Vinay  ");
	res.sendFile(__dirname+"/index.html")
});
app.get("/newpage", function(req, res){
	// res.send("Hello Iam Vinay  ");
	res.sendFile(__dirname+"/newpage.html")
});

app.listen(port, function(){
	console.log("Server running on http://localhost:"+port);
	console.log(`Server running on http://localhost:${port}`);
});
