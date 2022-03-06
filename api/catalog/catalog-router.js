const router = require("express").Router()
const db = require("./data/db-config")

function getAllsteps() {
  return db("steps")
}
router.get("/api/steps", async (req, res) => {
  res.json(await getAllsteps())
})

async function insertUser(user) {
  // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
  // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
  const [newUserObject] = await db("steps").insert(user, [
    "user_id",
    "username",
    "password",
  ])
  return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}

router.post("/api/steps", async (req, res) => {
  res.status(201).json(await insertUser(req.body))
})

// router.get("/", (req, res) => {
//   res.send("getting all users")
// })
router.get("/", async (req, res) => {
  res.json(await getAllsteps())
})

// router.post("/register", (req, res) => {
//   res.send("user registered")
// })

router.post("/api/users", async (req, res) => {
  res.status(201).json(await insertUser(req.body))
})
module.exports = router
