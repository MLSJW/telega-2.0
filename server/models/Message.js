const pool = require('../config/db');
const crypto = require('crypto');

class Message {
    static async send(senderId, receiverId, message) {
        const key = process.env.ENCRYPTION_KEY || 'secret_key_32_bytes_long_!';
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
        let encrypted = cipher.update(message, 'utf8', 'hex');
        encrypted += cipher.final('hex');

        const result = await pool.query(
            'INSERT INTO messages (sender_id, receiver_id, encrypted_message, iv) VALUES ($1, $2, $3, $4) RETURNING *',
            [senderId, receiverId, encrypted, iv.toString('hex')]
        );
        return result.rows[0];
    }

    static async getMessages(user1Id, user2Id) {
        const result = await pool.query(
            `SELECT * FROM messages 
             WHERE (sender_id = $1 AND receiver_id = $2) 
                OR (sender_id = $2 AND receiver_id = $1)
             ORDER BY sent_at ASC`,
            [user1Id, user2Id]
        );
        
        
        const key = process.env.ENCRYPTION_KEY || 'secret_key_32_bytes_long_!';
        const decryptedMessages = result.rows.map(msg => {
            const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(msg.iv, 'hex'));
            let decrypted = decipher.update(msg.encrypted_message, 'hex', 'utf8');
            decrypted += decipher.final('utf8');
            return { ...msg, decrypted_message: decrypted };
        });

        return decryptedMessages;
    }
}

module.exports = Message;