// Buffer实例化
const buf = Buffer.alloc( 10 ); 
console.log( 'buf--->',buf )
const buf1 = Buffer.from( [ 0x62,0x75,0x66,0x66,0x65,0x72 ] ); 
console.log( 'buf--->',buf1 )
const buf2 = Buffer.from( 'abcd' ); 
console.log( 'buf2--->',buf2 )
// Unicode 所有字符 ---> 字符集
// Unicode[ utf8 unf16 utf32 ] 
const buf3 = Buffer.from( 'abcd中文','utf8' ); 
console.log( 'buf3--->',buf3.toString() )

// Buffer静态功能方法
console.log( Buffer.isEncoding( 'GBK' ) ) //false
console.log( Buffer.isEncoding( 'utf8' ) ) //true

console.log( 'buf1--->',Buffer.isBuffer( buf1 ) ) //true

console.log( 'buf2--->',Buffer.byteLength( buf2 ) ) //4
console.log( 'buf3--->',Buffer.byteLength( buf3 ) ) //10

const buf4 = Buffer.concat( [ buf1,buf2,buf3 ] );
console.log( 'total[buf1+buf2+buf3]--->',buf4 )
console.log( 'totallength[buf1+buf2+buf3]--->',buf4.length )

// Buffer实例方法【 wirte() / silice() / toString() --->当buffer转字符串会自己调用JSON.stringify()方法 】
