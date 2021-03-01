const fs = require( 'fs' );
const path = require( 'path' );
const zlib = require( 'zlib' );
let mime = require( '../mime.json' );


module.exports = ( req,res,rootPath ) => {
    // 1.直接读取文件
    // fs.readFile( path.join( rootPath,req.url ),( err,data ) => {
    //     if( err ){
    //         res.writeHead( 200,{ "Content-Type": "text/plain; charset=utf8" } )
    //         res.end( '服务器出错...' )
    //     }else{

    //         //let mimeType = "text/plain";
    //         let ext = path.extname( req.url )
    //         //console.log( 'ext--->',ext )
    //         let mimeType = mime[ext];
    //         if( mimeType.startsWith( 'text' ) ){
    //             mimeType = mimeType 
    //         } 
    //         res.writeHead( 200,'ok',mimeType )
    //         res.write( data )
    //         res.end()
    //     }
    // } )

    // 2.压缩后读取
    let readable = fs.createReadStream( path.join( rootPath,req.url ) );
    let gz =  zlib.createGzip();
    // readable.on('error', err => {
    //     console.log('出错啦！！！')
    //     res.setHeader("Content-Type", 'text/plain; charset=utf8');
    //     // res.end('500 服务器开小差啦！！ 程序员小哥正在···')
    //     // res.write('ok')
    //     res.end('404')
    // })   

    readable.on( 'error',err => {
        // console.log( 'err ===>',err );
        // console.log( '===>','读取出错' );
        // res.removeHeader( 'content-encoding' )
        // //res.writeHead( 200,{ "Content-Type": "text/plain; charset=utf8" } )
        // res.end( "404 请求资源不存在" )
        res.removeHeader('Content-Encoding');
        //res.removeHeader('Content-Type');
        res.writeHead( 200,{ "Content-Type": "text/plain; charset=utf8" } )
        res.end( '404 请求资源不存在' );
    } )
 
    let mimeType = "text/plain";
    let ext = path.extname( req.url );
    mimeType = mime[ ext ];
    if( mimeType ){
        if( mimeType.startsWith('text') ){
            mimeType = mimeType + '; charset=utf8'
        }
        res.setHeader( "Content-Type",mimeType )
    }
    res.setHeader( 'Content-Encoding','gzip' )
    readable.pipe(gz).pipe(res)
}