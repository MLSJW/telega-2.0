const WebSocket = require('ws');

const setupWebSocket = (server) => {
    const wss = new WebSocket.Server({ server });

    const clients = new Map();

    wss.on('connection', (ws, req) => {
        const userId = req.url.split('=')[1];
        if (userId) {
            clients.set(userId, ws);
            console.log(`User ${userId} connected`);
        }

        ws.on('message', (message) => {
            try {
                const data = JSON.parse(message);
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

    return wss;
};

module.exports = setupWebSocket;