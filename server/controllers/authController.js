const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create(email, hashedPassword, username);
        res.status(201).json({ message: 'User registered', userId: user.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByEmail(email);
        if (!user) return res.status(404).json({ error: 'User not found' });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(401).json({ error: 'Invalid password' });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
        res.json({ token, user: { id: user.id, email: user.email, username: user.username } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};