const http = require( 'http' );
const static00 = require( './static00' );
const path = require( 'path' );

http.createServer( ( req,res ) => {
    if( req.url === '/favicon.ico' ){
        res.end()
        return
    }
    
    static00( req,res,path.join( __dirname,'..','www' ) )
} ).listen( 8080,() => {
    console.log( 'server is running...' )
} )