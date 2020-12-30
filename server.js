let http = require('http');
let users = [
  {id:1,name:'yp1'},
  {id:2,name:'yp2'},
  {id:3,name:'yp3'},
]

let serve = http.createServer(function(req,res){
  if(req.url == '/api/users'){
    res.end(JSON.stringify(users))
  }else{
    res.end('Not Found')
  }
})

serve.listen('3000',() => {
  console.log('后端服务器启动')
})
