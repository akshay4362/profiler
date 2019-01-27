import express from 'express'
const App =express()
const PORT=process.env.PORT || 3000
import bodyParser from 'body-parser'
import profileRoutes from './routes/route'
// import cors from 'cors'
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended:true}))


App.get('/',(req,res)=>{
    res.json('hello')
})
App.use('/api/profile',profileRoutes)


App.listen(PORT,()=>{
    console.log(`Magic Happening on ${PORT}`)
})