const express = require('express')

const PORT = process.env.PORT || 9998
const app = express();
const userRouter = require('./routes/userRoutes')


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Helloewf')
})

app.use('/api', userRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
