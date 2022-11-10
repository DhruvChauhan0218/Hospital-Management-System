const bodyParser = require('body-parser')
const express = require('express')
const routes = require('./routes/routes')
const PORT = 3000
const cors = require('cors') 

const app = express()
app.use(bodyParser.json())
app.use(cors({
    origin:"*"
}))
app.use(routes)
app.listen(PORT,()=>{
    console.log("server started on port ",PORT);
})  