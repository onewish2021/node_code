const http = require( 'http' );
const template = require( 'art-template' );
const fs = require( 'fs' );
const path = require( 'path' );
http.createServer( ( req,res ) => {
    if( req.url === '/favicon.ico' ){
        res.end('ok')
        return
    }

    // 1.基于模板名渲染模板
    // let html = template( path.join( __dirname,'index.html' ),{
    //     title: 'hello art-template!'
    // } );

    // 2.将模板源代码编译为函数
    // let art = `
    //     <ul>
    //         {{ each arr}}
    //             <li>{{$index}}-----{{$value}} </li>
    //         {{ /each }}
    //     </ul>
    // `
    
    // let render = template.compile( art );
    // let html = render( { 
    //     arr: [ 'a','b','c' ]
    //  } )

     // 3.将模板源代码编译成函数并立即执行
     let art = `
        <ul>
            {{ each user}}
                <li>{{$index}}-----{{$value}} </li>
            {{ /each }}
        </ul>
    `

    let html = template.render( art,{
        user: {
            name: 'art-templateuser',
            age: 100,
            job: 'web..'
        }
    } )

    console.log( 'html--->',html )
    res.end( html )
    
} ).listen( 8080,() => {
    console.log( 'server is running...' )
} )