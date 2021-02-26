const http = require( 'http' );
const querystring = require( 'querystring' );
const url = require( 'url' );

http.createServer( ( req,res ) => {
    if( req.url === '/favicon.ico' ){
        res.end()
        return
    }
    console.log( 'req.url--->',req.url )
    // get数据处理
    let { query: {a,b} } = url.parse( req.url,true )
    console.log( 'a--->',a )
    console.log( 'b--->',b )
    // post数据处理
    let str = '';
    req.on( 'data',chunk => {
        str += chunk
    } )
    req.on( 'end',() => {
        console.log( '接受完成...' )
        console.log( 'str--->',str )
        let { name,password } = querystring.parse( str );
        console.log( 'name--->',name )
        console.log( 'password--->',password )
    } )
    res.end('{ "code": 0 }')

} ).listen( 8080,() => {
    console.log( 'server is running...' )
} )