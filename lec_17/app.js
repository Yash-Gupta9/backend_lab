let http=require('http');
let server=http.createServer((req,res)=>{
    
    console.log(req.headers);
    console.log(res.headers);

    res.statusCode=201;
    res.write("lerning https server");
    res.end();

})

server.listen(4000,()=>{
    console.log("server is runnning on port 4000");
})