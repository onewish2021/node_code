const http = require( 'http' );
const path = require( 'path' );
let staticServer = require( './staticserver' );

http.createServer( ( req,res ) => {
    staticServer( req,res,path.join( __dirname,'www' ) )
} ).listen( 8080,() => {
    console.log( '服务器正在运行...' )
})