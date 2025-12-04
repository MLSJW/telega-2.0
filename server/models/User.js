const pool = require('../config/db');

class User {
    static async create(email, password, username) {
        const result = await pool.query(
            'INSERT INTO users (email, password, username) VALUES ($1, $2, $3) RETURNING *',
            [email, password, username]
        );
        return result.rows[0];
    }

    static async findByEmail(email) {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT id, email, username FROM users WHERE id = $1', [id]);
        return result.rows[0];
    }
}

module.exports = User;