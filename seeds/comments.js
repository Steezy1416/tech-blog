const {Comment} = require("../models/Comment")

const commentData = [
    {
        comment_text: "Hello",
        user_id: "1",
        post_id: "2"
    },
    {
        comment_text: "Wow so cool",
        user_id: "1",
        post_id: "2"
    },
    {
        comment_text: "amazing",
        user_id: "1",
        post_id: "2"
    },
    {
        comment_text: "nice",
        user_id: "2",
        post_id: "1"
    },
    {
        comment_text: "dope",
        user_id: "2",
        post_id: "1"
    },
    {
        comment_text: "cool",
        user_id: "3",
        post_id: "1"
    },
]

const seedComments = () => Comment.bulkCreate(commentData)

module.exports = seedComments