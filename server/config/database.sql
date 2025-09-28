create TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255) NOT NULL
);

create TABLE chats (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL CHECK (type in('private','group')),
    title VARCHAR(255)
);

create TABLE chat_participants (
    id SERIAL PRIMARY KEY,
    chat_id INT NOT NULL REFERENCES chats(id) ON DELETE CASCADE,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(chat_id,user_id)
);

create TABLE messages (
    id SERIAL PRIMARY KEY,
    chat_id INT NOT NULL REFERENCES chats(id) ON DELETE CASCADE,
    sender_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    text_content TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()

);

CREATE INDEX idx_messages_chat_id_created_at ON messages(chat_id, created_at);
CREATE INDEX idx_chat_participants_user_id ON chat_participants(user_id);