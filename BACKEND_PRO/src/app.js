const express=require("express");
const cors=require("cors");
const app = express();
const bookRoutes=require("./routes/bookRoutes")
app.use(cors());
app.use(express.json()); 

app.use('/api/books',bookRoutes);
module.exports=app;
