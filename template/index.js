const http = require( 'http' );
const url = require( 'url' );
const fs = require( 'fs' );
const path = require( 'path' );
const userdate = require( './user00.json' );
const template = require( 'art-template' );

// 过滤器注册
template.defaults.imports.map = function(aaa){
    switch( aaa ){
        case 'name':
            return '姓名';
        case 'age':
            return '年龄';
        case 'job':
            return '工作';
    }
}

http.createServer( ( req,res ) => {  
   let { pathname,query: {id} } = url.parse( req.url,true ) 
   //console.log( id )

   if( req.url === '/favicon.ico' ){
        res.end('ok！！！')
        return 
    }

    if( pathname === '/search.art' ){
        let html = template( path.join( __dirname,'search.art' ),{} );
        res.end( html )
    }

    if( pathname === '/result.art' ){
        let user = userdate[id];
        //console.log( user )
        let html = template( path.join( __dirname,'result.art' ),{
            user
        } );
        res.end( html )
    }

    if( pathname === '/all.art' ){
        //console.log( 'userdate--->',userdate )
        let arr = [];
        for( key in userdate ){
            arr.push( userdate[key] )
        }
        let html = template( path.join( __dirname,'all.art' ),{
            arr
        } );
        res.end( html )

    }

} ).listen( 8080,() => {
    console.log( 'server is running...' )
} )  