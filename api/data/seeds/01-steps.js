/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        {
          stepname: "Punta Talon",
          website: "www.salsacolombia.net",
          picture: "salsacolombia",
          videos: "scapp",
        },
      ])
    })
}
