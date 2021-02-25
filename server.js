// const http = require( 'http' );
// 1
// let server = http.createServer(); //返回一个服务器对象

// server.on( 'request',( request,response ) => {
//     response.write( 'hello nodejs!' )
//     response.end()
// } )
// // 监听一个服务器端口8080
// server.listen( 8080,() => {
//     console.log( 'server is running...' )
// } )

// 2
// let server = http.createServer( ( request,response ) => {
//     response.end( "{ code: 0 }" )
// } )

// server.listen( 8080,() => {
//     console.log( 'server is running...' )
// } )


// 3
// var http = require('http');

// http.createServer(function(req, res){

//  res.writeHead(200, {'Content-type' : 'text/html'});

//  res.write('<h1>Node.js</h1>');

//  res.end('<p>Hello World</p>');

// }).listen(8080);


