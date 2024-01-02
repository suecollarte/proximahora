// Import our custom CSS
import '../scss/styles.scss'
import HtmlWorker from "monaco-editor"
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import banneresp from '../assets/images/banneresp.png';
import express from 'express'
const app= express();
app.use(express.json())


app.get('/', (req, res) => {
    res.json({ status: 'ok' })
})

app.listen(8080, () => console.log('Server Up!'))