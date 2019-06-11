var http = require("http");
var fs = require("fs");
var url = require("url");
var mysql = require("mysql");

http.createServer(function(request, response) {


  var connection = mysql.createConnection({
    host : "localhost",
    post : 3000,
    user : "***",
    password : "***",
    database : "***"
  });

  var pathname = url.parse(request.url).pathname;
  var ext = pathname.match(/(\.[^\.]+|)$/)[0]; //取得后缀名
    switch (ext) {
      case ".css":
      case ".js":
      case ".png":
      case ".jpg":
        fs.readFile("." + request.url, function(err, data) {

          response.writeHead(200, {
            "Content-Type": {
              ".css": "text/css",
              ".js": "application/javascript",
              ".jpg": "image/jpeg",
              ".png": "image/png",
            }[ext]
          });
          //response.write();
          response.end(data);

        });
        break;
      default:
        if(request.url == "/login"){
				  connection.query("SELECT * FROM `login`", function(error, results) {
				    if(error) {
				      console.log("login error");
				    } else {
					      var loginobj = {
					        success : true,
					        information : results
					      };
						    response.end(JSON.stringify(loginobj));

						    // response.end();
					      }
				  }); 
        } else if(request.url == "/lotteryPeople"){
					  connection.query("SELECT * FROM `lotteryPeople`", function(error, results) {
					    if(error) {
					      console.log("lottey error");
					    } else {
					      var lotteryPeopleobj = {
					        success : true,
					        lotteryP : results
					      };
					      response.end(JSON.stringify(lotteryPeopleobj));
					    }
					  });  
        } else {
	        fs.readFile("./index.html", "utf-8", function(err,data) {
	          if (err) throw err;
	          //response.write();  
	          response.writeHead(200, {
	            "Content-Type": "text/html",
	            "Accept-Charset": "utf-8"
	            // "Access-Control-Allow-Origin": "*",
	            // "Access-Control-Allow-Headers": "X-Test-Cors",
	            // "Access-Control-Allow-Methods": "POST, PUT, Delete",
	            // "Access-Control-Max-Age": "10000"
	          });
	          response.end(data);			      	 
				  });
        }
    }
    //connection.end();
  })
  .listen(3000);
console.log("server start...");
