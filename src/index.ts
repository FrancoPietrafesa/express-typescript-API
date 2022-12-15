import express from 'express' //ESMoldules
//const express = require ('express')->commonjs
import diaryRouter from './routes/diaries'
const app = express()
app.use(express.json()) //middleware que transforma la req.body a un json

const PORT = 3000 //'PORT' is declared but its value is never read.





app.get ('/ping', (_req, res) =>{ //Parameter 'req' implicity has aan 'any' type.
    console.log ('someone pinged here!!')
    res.send('pong')

} ) 

app.use('/api/diaries', diaryRouter)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
}
)

