import express from 'express';
import cors from 'cors';
import http from 'http';
import { WebSocketServer } from 'ws';

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());


app.post('/api/auth/register', (req, res) => {
    console.log('Register attempt:', req.body);
    res.json({ 
        token: 'test-token-123',
        user: { id: 1, email: req.body.email, username: req.body.username }
    });
});

app.post('/api/auth/login', (req, res) => {
    console.log('Login attempt:', req.body);
    res.json({ 
        token: 'test-token-123',
        user: { id: 1, email: req.body.email, username: 'TestUser' }
    });
});

app.get('/api/me', (req, res) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (token) {
        res.json({ id: 1, email: 'test@test.com', username: 'TestUser' });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
});

app.get('/api/users', (req, res) => {
    res.json([
        { id: 2, email: 'user2@test.com', username: 'Alice' },
        { id: 3, email: 'user3@test.com', username: 'Bob' },
        { id: 4, email: 'user4@test.com', username: 'Charlie' }
    ]);
});


const wss = new WebSocketServer({ server });
const clients = new Map();

wss.on('connection', (ws, req) => {
    console.log('New WebSocket connection');
    
    ws.on('message', (message) => {
        console.log('Received:', message.toString());
       
        ws.send(JSON.stringify({ 
            type: 'echo', 
            content: 'Message received',
            timestamp: new Date().toISOString()
        }));
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(` Test server running on http://localhost:${PORT}`);
    console.log(` WebSocket ready on ws://localhost:${PORT}`);
});