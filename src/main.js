import express from 'express'
//import {Router} from 'express';

//const router = Router();
import handlebars from 'express-handlebars'
import viewsHome from './routes/viewshome.router.js'

import {fileURLToPath} from 'url'
import {dirname} from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename) 


import morgan from "morgan"

const app= express();

app.use(morgan('tiny'));

//para la interfaz
app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.use('/', viewsHome)



app.engine('handlebars', handlebars.engine({
    defaultLayout:'main',
    layoutDir:'./src/views/layouts',
    partialsDir:'./src/views/partials'
})
)
app.set('views',__dirname+'/views')
app.set('view engine', 'handlebars')


app.listen(8080, () => console.log('Server Up!'))