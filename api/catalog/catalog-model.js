const db = require("../data/db-config")

const getAll = () => {
  //select  * from accounts
  return db("steps")
}

const getById = (id) => {}

module.exports = { getAll, getById }
