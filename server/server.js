const express = require("express")
const mongoose = require("mongoose")
const productRouter = require("./routes/products")
const userRouter = require("./routes/userRouter")
const connectDatabase = require("./DataBase/dataBase")
const dotenv = require("dotenv")
var cors = require('cors')
const orderRouter = require("./routes/order")

const app =express()

//connect Database
mongoose
.connect("mongodb+srv://amazon:amazon@cluster0.377pn.mongodb.net/amazon?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {
    console.log("mongoDb connection successful");
  })

dotenv.config();

app.get("/", (req,res)=>{
    res.send("Mern stack e-commerce")

})



app.use(cors())

app.get("/api/config/paypal", (req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID || "sb")
})

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use("/api/products",productRouter)
app.use("/api/users",userRouter)
app.use("/api/orders",orderRouter)

app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})
})


const PORT = process.env.PORT 

app.listen(PORT,()=>{
    console.log(`Server is running PORT:${PORT}`)
})