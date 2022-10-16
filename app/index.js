const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow_Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE')
    next()
})

app.use('/dev', require('./routes/dev'))

try {
    app.listen(process.env.PORT || 3666, ()=> console.log(`Server listening on port ${process.env.PORT || 3666}`))
} catch(err) {
    console.log(err);
}