const sequelize = require("../config/connection")
const router = require("express").Router()
const { User, Post, Comment } = require("../models")

router.get("/", (req, res) => {
    Post.findAll({
        attributes: ["id", "title", "description", "user_id", "created_at"],
        include: [{
            model: Comment,
            attributes: ["id", "comment_text", "user_id", "post_id", "created_at"],
            include: [{
                model: User,
                attributes: ["username"]
            }]
        },
        {
            model: User,
            attributes: ["username"]
        }]
    })
    .then(postData => {
        const posts = postData.map(post => post.get({ plain: true }))
        console.log(posts)
        res.render("homepage", {posts})
    })
})

module.exports = router