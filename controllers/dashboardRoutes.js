const sequelize = require("../config/connection")
const router = require("express").Router()
const { User, Post, Comment } = require("../models")

router.get("/", (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ["id", "title", "description", "created_at", "user_id"],
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
        res.render("dashboard", {posts, userId: req.session.user_id})
    })
})

module.exports= router