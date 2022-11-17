const {User} = require("../models/User")

const userData = [
    {
        username: "Batman",
        password: "1234",
    },
    {
        username: "Alex",
        password: "1234",
    },
    {
        username: "Mark",
        password: "1234",
    },
    {
        username: "Jake",
        password: "1234",
    },
    {
        username: "PizzaMan",
        password: "1234"
    },
    {
        username: "This guy",
        password: "1234",
    },
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers