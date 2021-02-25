function fn1( callback ){ 
    function fn2(){
        function fn3(){
            if( Math.random() < 0.5 ){
                callback( new Error( 'fn3 err' ).message )
            }else{
                console.log( '3' )
            }

            // setTimeout( () => {
            //     throw new Error( 'fn3 err' )
            // }, 2000)
            // console.log( '3' )
        }
        fn3()
        console.log( '2' )
    }
    fn2()
    console.log( '1' )
}

// try{ 
//     fn1()
// }catch( e ){
//     console.log( 'e--->',e.message )
// }

// 回调函数
fn1( function( err ){
    console.log( 'err--->',err )
} )

console.log( '4' )
