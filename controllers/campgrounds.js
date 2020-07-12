const campgroundsRouter = require("express").Router()
const Campground = require("../models/campground")

campgroundsRouter.get("/", (req, res) => {
  res.send("React Camp Homepage")
})

campgroundsRouter.get("/campgrounds", (req, res) => {
  res.send("Campgrounds Page")
})

campgroundsRouter.get("/campgrounds/:id", (req, res) => {
  res.send(`Get request for individual campground ID:${req.params.id}`)
})

campgroundsRouter.post("/campgrounds/:id", (req, res) => {
  res.send(`Posted to ID: ${req.params.id}`)
})

campgroundsRouter.delete("/campgrounds/:id", (req, res) => {
  res.send(`Delete request sent to campground at id:${req.params.id}`)
})

module.exports = campgroundsRouter
