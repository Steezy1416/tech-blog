const router = require("express").Router()
const apiRoutes = require("./api")
const homepageRoutes = require("./homepageRoutes")
const dashRoutes = require("./dashboardRoutes")

router.use("/", homepageRoutes)
router.use("/api", apiRoutes)
router.use("/dashboard", dashRoutes)

module.exports = router