const expores = require("express");
const mongoose=require("mongoose");
const app = expores();
const port = 3000;
const cors = require("cors");
const membershipRoutes = require("./routes/membership");

app.use(cors());
app.use(expores.json());
app.get("/",(req,res)=>{
    res.send("Server running");
});
app.use("/membership", membershipRoutes);

async function connectDb() {
    await mongoose.connect("mongodb://localhost:27017", {
        dbName:"SUTMinton-Tournament",
    });
    console.log("mongodb connected");
}
connectDb().catch((error)=>{
    console.error(err);
})
app.listen(port,()=>{
    console.log("Server running on port",port);
});
