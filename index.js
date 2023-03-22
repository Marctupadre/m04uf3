const http = require("http");
const fs = require("fs");
const files_static = require("node-static");

let files = new files_static.Server("./public");


function send_index (response) 
{
    fs.readFile("index.html", function(err, data){
    if (err){
      console.error(err);
      return;
     }

   response.writeHead(200, {"Content-Type":"text/html"});
   response.write(data);

   response.end();
 }); 
}
function send_player (response)
{
  fs.readFile("player.png", function(err, data){
    if (err){
      console.error(err);
      return;
     }

   response.writeHead(200, {"Content-Type":"image/png"});
   response.write(data);

   response.end();
 }); 
}
/*function detect_image (response)
{
	let ruta = (this).val();
	switch ((this).attr(data)){
		case 'png':
			var ext = (".png", ".PNG");
			send_player(response);
			break;
		default:
			console.error(err);
	}
}
*/
http.createServer(function(request, response){ 	
	console.log(request.url);

	let url = request.url.split("/");
  
	request.addListener('end', function (){
			files.serve(request, response);
	}).resume();

/*
	switch (url[1]){
    case "player.png":
		send_player (response);
		break;

    default:
		  send_index(response);   
	}
*/
}).listen(6980);
