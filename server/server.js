import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import { WebSocketServer } from 'ws';
import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';
import './config/db.js'; 

dotenv.config();

const app = express();
const server = http.createServer(app);


app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
}));
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);


const wss = new WebSocketServer({ server });

const clients = new Map();

wss.on('connection', (ws, req) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const userId = url.searchParams.get('userId');
    
    if (userId) {
        clients.set(userId, ws);
        console.log(`User ${userId} connected`);
    }

    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message.toString());
            const { type, to, content } = data;

            if (type === 'message' && clients.has(to)) {
                clients.get(to).send(JSON.stringify({
                    type: 'message',
                    from: userId,
                    content: content,
                    timestamp: new Date().toISOString()
                }));
            }
        } catch (error) {
            console.error('WebSocket error:', error);
        }
    });

    ws.on('close', () => {
        clients.delete(userId);
        console.log(`User ${userId} disconnected`);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`WebSocket server ready`);
});