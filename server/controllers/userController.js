const e = require("express")
const db = require("../config/db")

class UserController {
    async createUser(req, res){
        const {username, email, password_hash} = req.body
        const newUser = await db.query(`INSERT INTO users (username, email, password_hash) values ($1, $2, $3) RETURNING *`, [username, email, password_hash])
        console.log(username, email)
        res.json(newUser.rows[0])
    }
    async getUsers(req, res){
        const users = await db.query('SELECT * FROM Users')
        res.json(users.rows)
    }
    async getOneUser(req, res){
        const id = req.params.id
        const user = await db.query('SELECT * FROM Users where id = $1', [id])
        res.json(user.rows)
        
    }
    async updateUser(req, res){
        const {id, username, email, password_hash} = req.body
        const upuser = await db.query('UPDATE Users set username = $1, email = $2, password_hash = $3 where id = $4 RETURNING *', [username, email, password_hash, id])
        res.json(upuser.rows[0])
    }
    async deleteUser(req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM Users where id = $1', [id])
        res.json(user.rows)
    
    }
}

module.exports = new UserController()