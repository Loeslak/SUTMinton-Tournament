const expores = require("express");
const app = expores();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Server running");
});
app.listen(port,()=>{
    console.log("Server running on port",port);
})