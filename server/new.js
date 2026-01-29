const express = require('express')
const app = express()
app.get('/data', (req,res)=>{
    const dummy = [
        {
            user: "satya",
            age : 18,
            gender : "female"
        }
    ]

res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173').json({ data: dummy })

    
})
app.listen(8000)