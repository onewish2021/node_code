// 1.使用传统的API解析URL字符串
// const url = require( 'url' );
// let strurl = 'https://www.bilibili.com/bangumi/play/ep374561';
// const myurl = url.parse( strurl );
// console.log( 'myurl--->',myurl )

/*
myurl---> Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.bilibili.com',
  port: null,
  hostname: 'www.bilibili.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/bangumi/play/ep374561',
  path: '/bangumi/play/ep374561',
  href: 'https://www.bilibili.com/bangumi/play/ep374561'
}
*/ 

// 2.使用WHATWG的API解析URL字符串
const myURL = new URL( 'https://www.bilibili.com/bangumi/play/ep374561' );
console.log( 'myurl--->',myURL )

/*
myurl---> URL {
  href: 'https://www.bilibili.com/bangumi/play/ep374561',
  origin: 'https://www.bilibili.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'www.bilibili.com',
  hostname: 'www.bilibili.com',
  port: '',
  pathname: '/bangumi/play/ep374561',
  search: '',
  searchParams: URLSearchParams {},
  hash: ''
}
*/ 
