const express = require("express")
const {newGamer, allGamers} = require("./gameController/gameController")
const router = express.Router()


router.post("/gamer", newGamer)
router.get("/gamers", allGamers)

module.exports = router
