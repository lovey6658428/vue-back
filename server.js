let http = require('http');
let users = [
  {id:11,name:'yp11'},
  {id:22,name:'yp22'},
  {id:33,name:'yp33'},
]

let serve = http.createServer(function(req,res){
  res.setHeader("Access-Control-Allow-Origin","*");
  if(req.url == '/api/users'){
    res.end(JSON.stringify(users))
  }else{
    res.end('Not Found')
  }
})

serve.listen('3000',() => {
  console.log('后端服务器启动')
})
