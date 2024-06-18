const express = require('express')
const app = express()
app.use(express.json())

const router = require('./router')

const logger = require('./multer/logger')
const error404 = require('./multer/error-404')

app.use('/public', express.static(__dirname+'/public'))
app.use('/api', router)

app.use(logger)
app.use(error404)

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('500 | Ошибка сервера')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`=== start server PORT ${PORT} ===`);
    console.log('Started!')
});