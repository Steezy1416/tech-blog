const router = require("express").Router()
const {User} = require("../../models")

//shows all users
router.get("/", (req, res) => {
    User.findAll({
        attributes: ["id", "username", "password"]
    })
    .then(userData => res.json(userData))
    .catch(err => {
        res.status(500).json(err)
    })
})

//shows user based on id
router.get("/:id", (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: ["id", "username", "password"]
    })
    .then(userData => {
        if(!userData){
            res.status(404).json({Message: "No user found with this id"})
        }
        res.json(userData)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//creates a new user
router.post("/", (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(userData => res.json(userData))
    .catch(err => {
        res.status(500).json(err)
    })
})

//delete user
router.delete("/:id", (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if(!userData){
            res.status(404).json({Message: "No user found with this id"})
        }
        res.json(userData)
    })
    .catch(err => {
        res.status(500).json(err)
    }) 
})

module.exports = router