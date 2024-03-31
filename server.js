const express = require('express')
const carRouter = require('./src/routes/cars')

const app = express()
app.use(express.json());

app.use('/api', carRouter)

const PORT = 4001;
app.listen(PORT, ()=>{
    console.log( `aplicacion corriendo en: http://localhost: ${PORT}`)
})