const express = require("express")
const sequelize = require("./config/connection")
const exphbs = require("express-handlebars")
const session = require("express-session")
const path = require("path")
const helpers = require("./utils/formaters")

const app = express()
const PORT = process.env.PORT || 3001

const SequelizeStore = require("connect-session-sequelize")(session.Store)

const sess = {
    secret: "This is the secret",
    cookie: {},
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize
    })
}

app.use(session(sess))

const hbs = exphbs.create({helpers})
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname, "public")))

app.use(require("./controllers/index"))

sequelize.sync({force: false})
.then(() => {
    app.listen(PORT, () => console.log("Server is now online"))
})
