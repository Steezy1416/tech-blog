const router = require("express").Router()
const {Comment,User, Post} = require("../../models")

//gets all comments
router.get("/", (req, res) => {
    Comment.findAll({
        attributes: ["id", "comment_text"],
        include: [
            {
                model: User,
                attributes: ["id", "username"]
            },
            {
                model: Post,
                attributes: ["id", "title", "description"]
            }
        ]
    })
    .then(commentData => res.json(commentData))
    .catch(err => {
        res.status(500).json(err)
    })
})

//gets comment based on id
router.get("/:id", (req, res) => {
    Comment.findOne({
        where: {
            id: req.params.id
        },
        attributes: ["id", "comment_text"],
        include: [
            {
                model: User,
                attributes: ["id", "username"]
            },
            {
                model: Post,
                attributes: ["id", "title", "description"]
            }
        ]
    })
    .then(commentData => {
        if(!commentData){
            res.status(404).json({Message: "No comment found with this id"})
        }
        res.json(commentData)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//creates a post
router.post("/", (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
    })
    .then(commentData => res.json(commentData))
    .catch(err => {
        res.status(500).json(err)
    })
})

//edits a post
router.put("/:id", (req, res) => {
    Comment.update({
        comment_text: req.body.comment_text
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(commentData => {
        if(!commentData){
            res.status(404).json({Message: "No comment found with this id"})
        }
        res.json(commentData)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//deletes a comment
router.delete("/:id", (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(commentData => {
        if(!commentData){
            res.status(404).json({Message: "No comment found with this id"})
        }
        res.json(commentData)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router