//const http = require( 'http' );
const fs = require( 'fs' );
const path = require( 'path' );

// let staticServer = ( req,res,rootPath ) => {
//     fs.readFile( path.join( rootPath,req.url ),( err,data ) => {
//         if( err ){
//             res.writeHead( 200,{ "Content-Type": "text/plain; charset=utf8" } )
//             res.end( '服务器出错...' )
//         }else{
//             res.write( data )
//             res.end()
//         }
//     } )
// }

//let root = path.join( __dirname ,'www' )

//console.log( 'root--->',root )

// http.createServer( ( req,res ) => {
//     if( req.url === '/index.html' ){
//         staticServer( req,res,root )
//     }else if( req.url === '/index.css' ){
//         staticServer( req,res,root )
//     }else if( req.url === '/index.js' ){
//         staticServer( req,res,root )
//     }else{
//         res.end( '404' )
//     }
// } ).listen( 8080,() => {
//     console.log( '服务器正在运行' )
// } )
let mime = require( './mime.json' );
module.exports = ( req,res,rootPath ) => {
    fs.readFile( path.join( rootPath,req.url ),( err,data ) => {
        if( err ){
            res.writeHead( 200,{ "Content-Type": "text/plain; charset=utf8" } )
            res.end( '服务器出错...' )
        }else{

            //let mimeType = "text/plain";
            let ext = path.extname( req.url )
            console.log( 'ext--->',ext )
            let mimeType = mime[ext];
            if( mimeType.startsWith( 'text' ) ){
                mimeType = mimeType + "; charset: utf8"
            } 
            res.writeHead( 200,'ok',mimeType )
            res.write( data )
            res.end()
        }
    } )
}