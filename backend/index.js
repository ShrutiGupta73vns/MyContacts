const express= require ("express")
require('dotenv').config()
const app=express()
const PORT=process.env.PORT || 5000

app.use("/api/contacts",require("./routes/contactRoutes"))

app.listen(PORT ,()=>{
    console.log(`Server running on the port ${PORT}`)
})
