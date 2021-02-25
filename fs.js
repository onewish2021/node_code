const fs = require( 'fs' );
const path = require( 'path' );

// 1.异步读取文件操作[ 异步操作会在文档同步操作加载完后再去执行异步的操作 ]
fs.readFile( path.join( __filename,'..','1.txt'), ( err,data ) => {
    if(err){
        console.log( '文件读取错误' )
        console.log( 'err ---> ',err )
        console.log( 'path --->', path.join( __filename, '1.txt') ) 
    }else{
        console.log( 'data ---> ',data )
        console.log( 'data.tostring ---> ',data.toString() )
    }
})

// fs.readFile( path.join( __filename,'..','1.txt'),'utf8' ,( err,data ) => {
//     if(err){
//         console.log( '文件读取错误' )
//         console.log( 'err ---> ',err )
//         console.log( 'path --->', path.join( __filename, '1.txt') ) 
//     }else{
//         console.log( 'data ---> ',data )
//         console.log( 'data.tostring ---> ',data.toString() ) //有utf8的编码解码规则参数则不需要进行手动tostring了
//     }
// })

// 2.同步读取文件操作
// let data = fs.readFileSync( path.join( __filename,'..','1.txt'),'utf8' );
// console.log( 'data --->',data )


// 3.异步写入文件操作
// fs.writeFile( path.join( __filename,'..','1.txt'),'hello node !',( err ) =>{
//     if( err ){
//         console.log( '写入文件失败！' )
//     }else{ 
//         console.log( '写入文件成功！' )
//     }
// })

// 4.同比写入文件同上 
// let text = fs.writeFileSync( path.join( __filename,'..','1.txt'),'hello node !',( err ) =>{
//     if( err ){
//         console.log( '写入文件失败！' )
//     }else{ 
//         console.log( '写入文件成功！' )
//     } 
// })