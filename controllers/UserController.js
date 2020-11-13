const { User } = require('../models');

class UserController {
    static create (req, res) {
        const user = {username: req.body.username}
        User.create(user)
        .then(user => {
            res.status(201).json({
                id: user.id,
                username: user.username,
                score: user.score
            })
        })
        .catch(err => {
            res.status(500).json({message: err.errors[0].message})
        })
    }
}
module.exports = UserController;