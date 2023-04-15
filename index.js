require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
const {middlewareGlobal, outroMiddleware} = require('./src/Middlewares/middleware')
const mongoose = require('mongoose')

// mongoose.connect(connectionString).then( ()=> {
//     app.emit('pronto')
// })



app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname,'public')))
app.set('views', path.resolve(__dirname,'src','Views'))
app.set('view engine','ejs')

app.use(middlewareGlobal)
app.use(routes)

async function connectMongoAndServer(connectionString){
  
    try{
        await mongoose.connect(connectionString)
        app.listen(3000, ()=> { console.log('Servidor rodando na porta 3000')})
    
    }catch(erro){
        console.log(erro)
    }   
}



connectMongoAndServer(process.env.connectionString)





 