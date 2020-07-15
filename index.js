const express =require("express");
const bodyParser  =require("body-parser")
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){

		res.sendFile(__dirname+"/main.html");
});




app.get("/calculator",function(req,res){

	res.sendFile(__dirname+"/index.html");
});


app.get("/about",function(req,res){

	res.sendFile(__dirname+"/about.html");
});



app.get("/contcat",function(req,res){

	res.sendFile(__dirname+"/contact.html");
});



app.post("/calculator",function(req,res){


	
	let n1 = req.body.f;
    let n2 = req.body.s;
    let sum = n1+n2;
    res.send(sum);
});




app.listen(3000,function(req,res){

	console.log("server is running at port no 3000")
});
