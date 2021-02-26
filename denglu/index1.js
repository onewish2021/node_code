const http = require( 'http' );
const querystring = require( 'querystring' );
const url = require( 'url' );
const path = require( 'path' );
const staticserver = require( '../staticserver' );

let user = {};

http.createServer( ( req,res ) => {
    if( req.url === '/favicon.ico' ){
        res.end()
        return
    }

    // 1.处理GET数据
    let {query: {name,password} ,pathname} = url.parse( req.url,true )
    if( pathname === '/login' ){
        res.writeHead(200, { 'Content-type': 'text/plain;charset=utf8' })
        if( user[name] && user[name] ===  password ){
            res.end(  '{ "code": 0,"msg": "用户登录成功！" }' )
            console.log( '登录用户为-->',name )
        }else{
            res.end(  '{ "code": 1,"msg": "用户名或密码输入错误！" }' )
        }
    }

    // 2.处理POST数据
    else if( req.url === '/register' ){
        let str = '';
        req.on( 'data',chunk => {
            str += chunk
        } )
        req.on( 'end',() => {
            console.log( '请求数据接受完毕' )
            let { post_name,post_password } = querystring.parse( str );
            console.log( 'post_name--->',post_name )
            console.log( 'post_password--->',post_password )
            res.writeHead(200, { 'Content-type': 'text/plain;charset=utf8' })
            if( !post_name ){
                res.end( '{ "code": 1,"msg": "请注册用户名!" }' )
            }else if( !post_password ){ 
                res.end( '{ "code": 1,"msg": "请注册密码!" }' )
            }else if( user[post_name] ){ 
                res.end( '{ "code": 1,"msg": "用户已被注册!" }' )
            }else{
                res.end( '{ "code": 0,"msg": "用户注册成功!" }' )
                user[post_name] = post_password
                console.log( '当前已有用户-->',post_name )
            }
        } ) 
    }
    // 3.处理各种格式数据
    else{
        staticserver( req,res,path.join( __dirname,'..','static' ) )
    }
    

} ).listen( 8080,() => {
    console.log( 'server is running...' )
} )