const sequelize = require("../config/connection")
const router = require("express").Router()
const { User, Post, Comment } = require("../models")

//renders the homepage
router.get("/", (req, res) => {
    console.log(req.session)
    
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
        
        const isLoggedIn = () => {
            if(req.session.loggedIn === true){
                return true
            }
            return false
        }

        let postOrder = []

        posts.forEach(post => postOrder.push(post))

        postOrder = postOrder.reverse()


        res.render("homepage", {postOrder, loggedIn: isLoggedIn(), userId: req.session.user_id})
    })
})

//renders the login page
router.get("/login", (req, res) => {

    if(req.session.loggedIn){
        res.redirect("/")
        return
    }

    res.render("login")
})

module.exports = router