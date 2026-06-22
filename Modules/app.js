const requestHandler = (req,res)=>{
    console.log(req.url, req.method)
    res.end('Hello from Node.js');
}
module.exports = {requestHandler}