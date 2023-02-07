const HTTP = require("http");
const FS = require("fs");

let http_server = HTTP.createServer(function(req, res){
    FS.readFile("index.html", function(err, data){
    if (err){
      console.error(err);
      return;
    }
    res.write(data);
    
    res.end();
    });
});
http_server.listen(6969);