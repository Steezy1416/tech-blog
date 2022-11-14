const router = require("express").Router()
const { Post, User } = require("../../models")

//show all posts
router.get("/", (req, res) => {
    Post.findAll({
        attributes: ["id", "title", "description"],
        include: [{
            model: User,
            attributes: ["id", "username"]
        }]
    })
        .then(postData => res.json(postData))
        .catch(err => {
            res.status(500).json(err)
        })
})

//show post based on id
router.get("/:id", (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ["id", "title", "description"],
        include: [{
            model: User,
            attributes: ["id", "username"]
        }]
    })
        .then(postData => {
            if (!postData) {
                res.status(404).json({ Message: "No post found with this id" })
            }
            res.json(postData)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//creates a new post
router.post("/", (req, res) => {
    Post.create({
        title: req.body.title,
        description: req.body.description,
        user_id: req.body.user_id
    })
        .then(postData => res.json(postData))
        .catch(err => {
            res.status(500).json(err)
        })
})

//edits post
router.put("/:id", (req, res) => {
    Post.update({
        title: req.body.title,
        description: req.body.description
    },
        {
            where: {
                id: req.params.id
            }
        })
        .then(postData => {
            if (!postData) {
                res.status(404).json({ Message: "No post found with this id" })
            }
            res.json(postData)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//deletes post
router.delete("/:id", (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(postData => {
        if (!postData) {
            res.status(404).json({ Message: "No post found with this id" })
        }
        res.json(postData)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})


module.exports = router