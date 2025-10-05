const express = require('express')

const PORT = process.env.PORT || 9998
const app = express();
const userRouter = require('./routes/userRoutes')
const http = require('http').createServer(app);
const io = require('socket.io')(http);



app.use(express.json())

app.get('/', (req, res) => {
    res.send( { express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
})

app.use('/api', userRouter)

http.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
});


