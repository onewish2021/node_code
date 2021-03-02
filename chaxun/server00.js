const http = require( 'http' );
const url = require( 'url' );
const fs = require( 'fs' );
const path = require( 'path' );
const user = require( './user.json' );

http.createServer( ( req,res ) => {  
   let { pathname,query: {id} } = url.parse( req.url,true ) 

   if( req.url === '/favicon.ico' ){
        res.end('ok！！！')
        return 
    }

    if( pathname === '/search.html' ){
        let readable = fs.createReadStream( path.join( __dirname,'search.html' ) );
        console.log( 'yahaha...' )
        readable.pipe( res );
    }
    if( pathname === '/result.html' ){
        let str = '';
        let readable = fs.createReadStream( path.join( __dirname,'result.html' ) );
        readable.on( 'data', chunk => {
            str += chunk
        } )
        readable.on( 'end',() => {
            let user_id = user[id];
            str = str.replace( '{{name}}',user_id.name )
            str = str.replace( '{{age}}',user_id.age )
            str = str.replace( '{{job}}',user_id.job )
            console.log( 'str--->',str )
            res.end( str )
        } )
    }
} ).listen( 8080,() => {
    console.log( 'server is running...' )
} )  