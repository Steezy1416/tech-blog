const router = require("express").Router()
const userRoutes = require("./userRoutes")
const postRoutes = require("./postRoutes")

router.use("/api/users", userRoutes)
router.use("/api/posts", postRoutes)

module.exports = router