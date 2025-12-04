import React, { useState, useEffect, useRef } from 'react';

const Chat = ({ currentUser, selectedUser }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [ws, setWs] = useState(null);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (currentUser && selectedUser) {
            const socket = new WebSocket(`ws://localhost:3000?userId=${currentUser.id}`);
            setWs(socket);

            socket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                setMessages(prev => [...prev, {
                    ...data,
                    timestamp: new Date().toISOString()
                }]);
            };

            socket.onopen = () => {
                console.log('WebSocket connected');
            };

            socket.onerror = (error) => {
                console.error('WebSocket error:', error);
            };

         
            fetchMessages();

            return () => {
                socket.close();
            };
        }
    }, [selectedUser]);

    const fetchMessages = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`http://localhost:3000/api/messages/${selectedUser.id}`, {
                headers: { 
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (res.ok) {
                const data = await res.json();
                setMessages(data);
            }
        } catch (error) {
            console.error('Failed to fetch messages:', error);
        }
    };

    const sendMessage = () => {
        if (input.trim() && ws) {
            const message = {
                type: 'message',
                to: selectedUser.id,
                content: input,
                timestamp: new Date().toISOString()
            };
            
            ws.send(JSON.stringify(message));
            
            
            setMessages(prev => [...prev, {
                ...message,
                from: currentUser.id,
                isOwn: true
            }]);
            
            setInput('');
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h3>{selectedUser?.username || 'User'}</h3>
                <small>{selectedUser?.email}</small>
            </div>
            
            <div className="messages-area">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`message ${msg.from === currentUser.id ? 'own' : 'other'}`}
                    >
                        <div className="message-content">{msg.content || msg.decrypted_message}</div>
                        <div className="message-time">
                            {new Date(msg.timestamp || msg.sent_at).toLocaleTimeString([], { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                            })}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            
            <div className="input-area">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type a message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;