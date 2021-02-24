//console.log( 'process.argv--->',process.argv );

/*
process.argv---> [
  'D:\\dev\\nodejs\\node.exe',
  'C:\\Users\\dell\\Desktop\\code\\node00\\process.js'
]
*/

let playerAction = process.argv[2];
let computerAction = '';
let random = Math.random() * 3;

if( playerAction ){
  if( random < 1 ){
    computerAction = "shitou"
  }else if( random > 2 ){
    computerAction = "jiandao"
  }else{
    computerAction = "bu"
  }

  if( playerAction === computerAction ){
    console.log( '结果 ---> 平局' )
  }else if(
    ( playerAction==="shitou"&&computerAction==="jiandao" )||
    ( playerAction==="jiandao"&&computerAction==="bu" )||
    ( playerAction==="bu"&&computerAction==="shitou" )){
    console.log( '结果 ---> 玩家赢' )
  }else{
    console.log( '结果 ---> 电脑赢' )
  }
}else {
  console.log( '请输入你的出拳！' )
}


