const path = require('path')
const express = require('express')

const app = express()
const port = 3000

app.use('/libs/bootstrap/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/libs/bootstrap/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/', express.static(path.join(__dirname, 'public_html')))

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})