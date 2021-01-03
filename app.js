const ejs=require("ejs")
const fast2sms=require("fast-two-sms")
const express=require("express")
const app=express()
const port=process.env.PORT || 3000
require("dotenv").config()

app.set("view engine", ejs)
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>
{
res.render("index.ejs")
})

app.post("/sendmessage", async (req,res)=>
{
const options = await fast2sms.sendMessage({authorization : process.env.API_KEY , message : req.body.message ,  numbers : [req.body.phone]} )
res.send("Message is sent successfully")
})

app.listen(port, ()=>
{
    console.log("Website is started at " + port)
})