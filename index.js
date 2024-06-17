const express = require('express')
const app = express()
app.use(express.json())

const router = require('./router')

app.use('/public', express.static(__dirname+'/public'))
app.use('/api', router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`=== start server PORT ${PORT} ===`);
    console.log('Started!')
});