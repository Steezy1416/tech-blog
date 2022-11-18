const router = require("express").Router()
const { User } = require("../../models")

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
            if (!userData) {
                res.status(404).json({ Message: "No user found with this id" })
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
        .then(userData => {
            req.session.save(() => {
                req.session.user_id = userData.id,
                    req.session.username = userData.username,
                    req.secure.loggedIn = true

                res.json(userData)
            })
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post("/login", (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(userData => {
            if (!userData) {
                res.status(400).json({ message: "No user with that email address" })
                return
            }

            const validPassword = dbUserData.checkPassword(req.body.password)

            if (!validPassword) {
                res.status(400).json({ message: "Incorrect password!" })
                return
            }


            req.session.save(() => {
                // declare session variables
                req.session.user_id = userData.id;
                req.session.username = userData.username;
                req.session.loggedIn = true;

                res.json({ user: userData, message: "You have logged in" })
            })
        })
})

router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
})

//delete user
router.delete("/:id", (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ Message: "No user found with this id" })
            }
            res.json(userData)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router