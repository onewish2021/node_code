const http = require( 'http' );
const path = require( 'path' );
const zlib = require( 'zlib' );
const fs = require( 'fs' );

http.createServer( ( req,res ) => {
    if( req.url === '/favicon.ico' ){
        res.end()
        return
    }

    let readable = fs.createReadStream( path.join( __dirname,'..','www',req.url ) );
    let gz =  zlib.createGzip();
    res.setHeader( 'content-encoding','gzip' )

    readable.pipe( gz ).pipe( res )

} ).listen( 8080,() => {
    console.log( 'server is running...' )
} )