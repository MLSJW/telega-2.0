const express = require('express')

const PORT = process.env.PORT || 9998
const app = express();
const userRouter = require('./routes/userRoutes')
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');


app.use(express.json())


const corsOptions = {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST']
}

app.use(cors(corsOptions))
app.use(express.json({extended: true}))

app.get('/api', (req, res) => {
    res.json({ab:['fg','sdf']})
});


app.use('/api', userRouter)
app.get('/api', (req, res) => {
    res.sendFile(__dirname + 'package.json')
});

http.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
});


