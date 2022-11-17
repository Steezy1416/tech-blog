const {Post} = require("../models/Post")

const postData = [
    {
        title: "Problem",
        description: "This one wont delete",
        user_id: 1
    },
    {
        title: "yes",
        description: "This one will delete",
        user_id: 1
    },
    {
        title: "No",
        description: "This wont delete",
        user_id: 2
    },
    {
        title: "yes",
        description: "this one will delete",
        user_id: 2
    },
    {
        title: "yes",
        description: "this one too",
        user_id: 1
    },
    {
        title: "yes",
        description: "this one will delete",
        user_id: 2
    },
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts